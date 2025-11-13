-- Crear tabla de ventas
CREATE TABLE IF NOT EXISTS ventas (
  venta_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  fecha_venta DATETIME NOT NULL,
  total_venta DOUBLE(10,2) UNSIGNED NOT NULL,
  monto_pagado DOUBLE(10,2) UNSIGNED NOT NULL,
  cambio DOUBLE(10,2) NOT NULL DEFAULT 0,
  PRIMARY KEY (venta_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear tabla de detalle de ventas
CREATE TABLE IF NOT EXISTS detalle_ventas (
  detalle_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  venta_id INT UNSIGNED NOT NULL,
  codigo_producto INT UNSIGNED NOT NULL,
  cantidad INT UNSIGNED NOT NULL,
  subtotal DOUBLE(10,2) UNSIGNED NOT NULL,
  PRIMARY KEY (detalle_id),
  FOREIGN KEY (venta_id) REFERENCES ventas(venta_id) ON DELETE CASCADE,
  FOREIGN KEY (codigo_producto) REFERENCES productos(codigo_producto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
