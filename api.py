from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

DB_CONFIG = {
    "host": os.getenv("DB_HOST", "localhost"),
    "user": os.getenv("DB_USER", "root"),
    "password": os.getenv("DB_PASSWORD", ""),
    "database": os.getenv("DB_NAME", "pos")
}

def get_db_connection():
    try:
        conn = mysql.connector.connect(**DB_CONFIG)
        return conn
    except mysql.connector.Error as e:
        return None

@app.route("/")
def root():
    return render_template("index.html")
    
@app.route("/productos", methods=["GET"])
def obtener_productos():
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor(dictionary=True)
    
    try:
        cursor.execute("SELECT codigo_producto, nombre_producto, precio_producto FROM productos ORDER BY codigo_producto")
        productos = cursor.fetchall()
        return jsonify(productos)
    except mysql.connector.Error as e:
        return jsonify({"error": f"Error al obtener productos: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()

@app.route("/productos/<int:codigo>", methods=["GET"])
def obtener_producto(codigo):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor(dictionary=True)
    
    try:
        cursor.execute("SELECT codigo_producto, nombre_producto, precio_producto FROM productos WHERE codigo_producto = %s", (codigo,))
        producto = cursor.fetchone()
        
        if not producto:
            return jsonify({"error": "Producto no encontrado"}), 404
        
        return jsonify(producto)
    except mysql.connector.Error as e:
        return jsonify({"error": f"Error al obtener producto: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()

@app.route("/productos/buscar/<termino>", methods=["GET"])
def buscar_productos(termino):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor(dictionary=True)
    
    try:
        query = """
            SELECT codigo_producto, nombre_producto, precio_producto 
            FROM productos 
            WHERE nombre_producto LIKE %s OR CAST(codigo_producto AS CHAR) LIKE %s
            ORDER BY nombre_producto
        """
        cursor.execute(query, (f"%{termino}%", f"%{termino}%"))
        productos = cursor.fetchall()
        return jsonify(productos)
    except mysql.connector.Error as e:
        return jsonify({"error": f"Error al buscar productos: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()

@app.route("/ventas", methods=["POST"])
def registrar_venta():
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor()
    data = request.get_json()
    
    try:
        cursor.execute("""
            INSERT INTO ventas (fecha_venta, total_venta, monto_pagado, cambio)
            VALUES (NOW(), %s, %s, %s)
        """, (data['total'], data['monto_pagado'], data['cambio']))
        
        venta_id = cursor.lastrowid
        
        for producto in data['productos']:
            cursor.execute("""
                INSERT INTO detalle_ventas (venta_id, codigo_producto, cantidad, subtotal)
                SELECT %s, codigo_producto, %s, precio_producto * %s
                FROM productos WHERE codigo_producto = %s
            """, (venta_id, producto['cantidad'], producto['cantidad'], producto['codigo_producto']))
        
        conn.commit()
        return jsonify({"message": "Venta registrada exitosamente", "venta_id": venta_id})
    except mysql.connector.Error as e:
        conn.rollback()
        return jsonify({"error": f"Error al registrar venta: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()

@app.route("/ventas", methods=["GET"])
def obtener_ventas():
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor(dictionary=True)
    limit = request.args.get('limit', default=50, type=int)
    
    try:
        cursor.execute("""
            SELECT venta_id, fecha_venta, total_venta, monto_pagado, cambio
            FROM ventas
            ORDER BY fecha_venta DESC
            LIMIT %s
        """, (limit,))
        ventas = cursor.fetchall()
        return jsonify(ventas)
    except mysql.connector.Error as e:
        return jsonify({"error": f"Error al obtener ventas: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()

@app.route("/ventas/<int:venta_id>", methods=["GET"])
def obtener_detalle_venta(venta_id):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor(dictionary=True)
    
    try:
        cursor.execute("""
            SELECT v.venta_id, v.fecha_venta, v.total_venta, v.monto_pagado, v.cambio
            FROM ventas v
            WHERE v.venta_id = %s
        """, (venta_id,))
        venta = cursor.fetchone()
        
        if not venta:
            return jsonify({"error": "Venta no encontrada"}), 404
        
        cursor.execute("""
            SELECT dv.detalle_id, dv.codigo_producto, p.nombre_producto, 
                   dv.cantidad, p.precio_producto, dv.subtotal
            FROM detalle_ventas dv
            JOIN productos p ON dv.codigo_producto = p.codigo_producto
            WHERE dv.venta_id = %s
        """, (venta_id,))
        detalles = cursor.fetchall()
        
        venta['detalles'] = detalles
        return jsonify(venta)
    except mysql.connector.Error as e:
        return jsonify({"error": f"Error al obtener detalle de venta: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
