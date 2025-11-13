const API_URL = "http://localhost:8000";

let productos = [];
let totalProductos = 0;
let modalAbierto = false;

document.addEventListener("DOMContentLoaded", function () {
  cargarProductosDesdeAPI();
  document.addEventListener("keydown", manejarEventoGlobal);

  const inputCodigo = document.getElementById("entrada-codigo");
  if (inputCodigo) {
    inputCodigo.focus();
  }
});

async function cargarProductosDesdeAPI() {
  try {
    const response = await fetch(`${API_URL}/productos`);
    if (!response.ok) throw new Error("Error al cargar productos");

    const data = await response.json();
    productos = data.map((p) => [
      String(p.codigo_producto).padStart(3, "0"),
      p.nombre_producto,
      p.precio_producto,
    ]);
  } catch (error) {
    console.error("Error:", error);
    alert("No se pudo conectar con el servidor. Usando datos de respaldo.");

  }
}

function manejarEventoGlobal(evento) {
  if (modalAbierto && evento.target.id !== "input-clave") {
    return;
  }

  if (evento.target.type === "password") {
    return;
  }

  if (
    evento.key.length === 1 &&
    !evento.ctrlKey &&
    !evento.altKey &&
    !evento.metaKey
  ) {
    const inputCodigo = document.getElementById("entrada-codigo");

    if (document.activeElement !== inputCodigo) {
      inputCodigo.focus();
    }
  }

  buscarProductoPorCodigo(evento);
}

function buscarProductoPorCodigo(evento) {
  if (evento.key === "Enter") {
    let codigoCompleto = document.getElementById("entrada-codigo").value;

    if (codigoCompleto.length > 0) {
      let cantidad = 1;
      let codigo = codigoCompleto;

      if (codigoCompleto.indexOf("*") !== -1) {
        const partes = codigoCompleto.split("*");
        cantidad = parseInt(partes[0]) || 1;
        codigo = partes[1];
      }

      for (let i = 0; i < productos.length; i++) {
        if (productos[i][0] === codigo) {
          agregarProductoATabla(productos[i], cantidad);
          document.getElementById("entrada-codigo").value = "";
          break;
        }
      }
    }
  } else if (evento.key === "Delete") {
    eliminarUltimoProducto();
  } else if (evento.key === "+") {
    evento.preventDefault();
    repetirUltimoProducto();
  } else if (evento.key === "c" || evento.key === "C") {
    evento.preventDefault();

    if (modalAbierto) {
      return;
    }

    const tabla = document.getElementById("cuerpo-datos");
    if (tabla.rows.length === 0) {
      alert("No hay productos para cancelar.");
      return;
    }

    modalAbierto = true;

    const modal = crearModalContrasena();
    document.body.appendChild(modal);

    const inputClave = document.getElementById("input-clave");
    inputClave.focus();
  } else if (evento.key === "p" || evento.key === "P") {
    evento.preventDefault();

    if (modalAbierto) {
      return;
    }

    const tabla = document.getElementById("cuerpo-datos");
    if (tabla.rows.length === 0) {
      alert("No hay productos en la venta.");
      return;
    }

    finalizarVenta();
  }
}

function agregarProductoATabla(producto, cantidad = 1) {
  const tabla = document.getElementById("cuerpo-datos");
  const renglon = tabla.insertRow();
  const celdaCantidad = renglon.insertCell(0);
  const celdaNombre = renglon.insertCell(1);
  const celdaPrecio = renglon.insertCell(2);
  const celdaTotal = renglon.insertCell(3);

  celdaCantidad.setAttribute("style", "text-align: center;");
  celdaNombre.setAttribute("style", "text-align: center;");
  celdaPrecio.setAttribute("style", "text-align: center;");
  celdaTotal.setAttribute("style", "text-align: center;");

  const subtotal = producto[2] * cantidad;

  celdaCantidad.innerHTML = cantidad;
  celdaNombre.innerHTML = producto[1];
  celdaPrecio.innerHTML = `$${producto[2]}`;
  celdaTotal.innerHTML = `$${subtotal.toFixed(2)}`;

  renglon.dataset.codigoProducto = producto[0];
  renglon.dataset.cantidad = cantidad;

  totalProductos += subtotal;
  actualizarPrecioTotal();
}

function eliminarUltimoProducto() {
  const tabla = document.getElementById("cuerpo-datos");
  if (tabla.rows.length > 0) {
    const ultimaFila = tabla.rows[tabla.rows.length - 1];
    const totalCelda = ultimaFila.cells[3].innerText;
    const totalValor = parseFloat(totalCelda.replace("$", ""));
    totalProductos -= totalValor;
    tabla.deleteRow(tabla.rows.length - 1);
    actualizarPrecioTotal();
  }
}

function repetirUltimoProducto() {
  const tabla = document.getElementById("cuerpo-datos");
  if (tabla.rows.length > 0) {
    const ultimaFila = tabla.rows[tabla.rows.length - 1];
    const codigoUltimoProducto = ultimaFila.cells[1].innerText;
    for (let i = 0; i < productos.length; i++) {
      if (productos[i][1] === codigoUltimoProducto) {
        agregarProductoATabla(productos[i], 1);
        break;
      }
    }
  }
}

function actualizarPrecioTotal() {
  let elementoTotal = document.getElementById("precio-total");
  if (!elementoTotal) {
    elementoTotal = document.getElementById("total");
  }

  if (elementoTotal) {
    elementoTotal.innerHTML = `$${totalProductos.toFixed(2)}`;
  }

  const elementosTotal = document.getElementsByClassName("total-amount");
  for (let i = 0; i < elementosTotal.length; i++) {
    elementosTotal[i].innerHTML = `$${totalProductos.toFixed(2)}`;
  }
}

function crearModalContrasena() {
  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  const contenido = document.createElement("div");
  contenido.style.cssText = `
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  `;

  contenido.innerHTML = `
    <h2>Cancelar Venta</h2>
    <p>Ingrese la clave para cancelar la venta:</p>
    <input type="password" id="input-clave" style="
      font-size: 20px;
      padding: 10px;
      width: 200px;
      border: 2px solid #ccc;
      border-radius: 5px;
      text-align: center;
      letter-spacing: 5px;
    " maxlength="10" />
    <br><br>
    <button id="btn-confirmar" style="
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      margin-right: 10px;
    ">Confirmar</button>
    <button id="btn-cancelar" style="
      background-color: #f44336;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    ">Cancelar</button>
  `;

  modal.appendChild(contenido);

  function cerrarModal() {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
    modalAbierto = false;
  }

  contenido.querySelector("#btn-confirmar").onclick = function () {
    const clave = document.getElementById("input-clave").value;
    validarYCancelarVenta(clave);
    cerrarModal();
  };

  contenido.querySelector("#btn-cancelar").onclick = function () {
    cerrarModal();
  };

  contenido.querySelector("#input-clave").onkeypress = function (e) {
    if (e.key === "Enter") {
      const clave = document.getElementById("input-clave").value;
      validarYCancelarVenta(clave);
      cerrarModal();
    }
  };

  modal.onkeydown = function (e) {
    if (e.key === "Escape") {
      cerrarModal();
    }
  };

  return modal;
}

function validarYCancelarVenta(clave) {
  if (clave === "12345") {
    const confirmacion = confirm(
      "¿Está seguro de que desea cancelar la venta?"
    );
    if (confirmacion) {
      const tabla = document.getElementById("cuerpo-datos");
      while (tabla.rows.length > 0) {
        tabla.deleteRow(0);
      }
      totalProductos = 0;
      actualizarPrecioTotal();
      alert("Venta cancelada.");
    }
  } else if (clave !== "") {
    alert("Clave incorrecta. No se pudo cancelar la venta.");
  }
}

function eliminarProducto() {
  eliminarUltimoProducto();
  if (document.getElementById("cuerpo-datos").rows.length === 0) {
    alert("No hay productos para eliminar.");
  }
}

async function finalizarVenta() {
  const tabla = document.getElementById("cuerpo-datos");
  if (tabla.rows.length === 0) {
    alert("No hay productos en la venta.");
    return;
  }

  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  const contenido = document.createElement("div");
  contenido.style.cssText = `
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    min-width: 300px;
  `;

  contenido.innerHTML = `
    <h2>Finalizar Venta</h2>
    <p style="font-size: 24px; font-weight: bold;">Total: $${totalProductos.toFixed(
      2
    )}</p>
    <p>Ingrese el monto recibido:</p>
    <input type="number" id="input-pago" step="0.01" style="
      font-size: 20px;
      padding: 10px;
      width: 200px;
      border: 2px solid #ccc;
      border-radius: 5px;
      text-align: center;
    " />
    <p id="cambio-texto" style="font-size: 18px; color: #4CAF50; font-weight: bold;"></p>
    <br>
    <button id="btn-procesar" style="
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      margin-right: 10px;
    ">Procesar Venta</button>
    <button id="btn-cancelar-venta" style="
      background-color: #f44336;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    ">Cancelar</button>
  `;

  modal.appendChild(contenido);
  document.body.appendChild(modal);
  modalAbierto = true;

  const inputPago = document.getElementById("input-pago");
  inputPago.focus();

  inputPago.oninput = function () {
    const montoPagado = parseFloat(inputPago.value) || 0;
    const cambio = montoPagado - totalProductos;
    const cambioTexto = document.getElementById("cambio-texto");
    if (montoPagado >= totalProductos && montoPagado > 0) {
      cambioTexto.innerHTML = `Cambio: $${cambio.toFixed(2)}`;
      cambioTexto.style.color = "#4CAF50";
    } else if (montoPagado > 0) {
      cambioTexto.innerHTML = `Falta: $${Math.abs(cambio).toFixed(2)}`;
      cambioTexto.style.color = "#f44336";
    } else {
      cambioTexto.innerHTML = "";
    }
  };

  function cerrarModal() {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
    modalAbierto = false;
  }

  contenido.querySelector("#btn-procesar").onclick = async function () {
    const montoPagado = parseFloat(inputPago.value) || 0;
    if (montoPagado >= totalProductos) {
      const cambio = montoPagado - totalProductos;

      const productosVenta = [];
      for (let i = 0; i < tabla.rows.length; i++) {
        const fila = tabla.rows[i];
        productosVenta.push({
          codigo_producto: parseInt(fila.dataset.codigoProducto),
          cantidad: parseInt(fila.dataset.cantidad),
        });
      }

      try {
        const response = await fetch(`${API_URL}/ventas`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productos: productosVenta,
            total: totalProductos,
            monto_pagado: montoPagado,
            cambio: cambio,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          alert(
            `Venta procesada exitosamente.\nVenta ID: ${
              data.venta_id
            }\nCambio: $${cambio.toFixed(2)}`
          );
        } else {
          alert(
            `Venta procesada localmente.\nCambio: $${cambio.toFixed(
              2
            )}\nNo se pudo guardar en la base de datos.`
          );
        }
      } catch (error) {
        console.error("Error al guardar venta:", error);
        alert(`Venta procesada localmente.\nCambio: $${cambio.toFixed(2)}`);
      }

      while (tabla.rows.length > 0) {
        tabla.deleteRow(0);
      }
      totalProductos = 0;
      actualizarPrecioTotal();
      cerrarModal();
    } else {
      alert("El monto ingresado es insuficiente.");
    }
  };

  contenido.querySelector("#btn-cancelar-venta").onclick = function () {
    cerrarModal();
  };

  inputPago.onkeypress = function (e) {
    if (e.key === "Enter") {
      contenido.querySelector("#btn-procesar").click();
    }
  };
}

function solicitarCancelarVenta() {
  const tabla = document.getElementById("cuerpo-datos");
  if (tabla.rows.length === 0) {
    alert("No hay productos para cancelar.");
    return;
  }

  modalAbierto = true;
  const modal = crearModalContrasena();
  document.body.appendChild(modal);
  const inputClave = document.getElementById("input-clave");
  inputClave.focus();
}

async function abrirBuscarProducto() {
  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  const contenido = document.createElement("div");
  contenido.style.cssText = `
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
  `;

  contenido.innerHTML = `
    <h2>Buscar Producto</h2>
    <input type="text" id="input-busqueda" placeholder="Escriba el nombre del producto..." style="
      font-size: 16px;
      padding: 10px;
      width: 100%;
      border: 2px solid #ccc;
      border-radius: 5px;
      margin-bottom: 15px;
    " />
    <div id="resultados-busqueda" style="max-height: 400px; overflow-y: auto;"></div>
    <br>
    <button id="btn-cerrar-busqueda" style="
      background-color: #f44336;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    ">Cerrar</button>
  `;

  modal.appendChild(contenido);
  document.body.appendChild(modal);
  modalAbierto = true;

  const inputBusqueda = document.getElementById("input-busqueda");
  inputBusqueda.focus();

  inputBusqueda.oninput = async function () {
    const termino = inputBusqueda.value.toLowerCase();
    const resultados = document.getElementById("resultados-busqueda");

    if (termino.length < 2) {
      resultados.innerHTML =
        "<p>Escriba al menos 2 caracteres para buscar...</p>";
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/productos/buscar/${encodeURIComponent(termino)}`
      );
      if (!response.ok) throw new Error("Error en búsqueda");

      const productosFiltrados = await response.json();

      if (productosFiltrados.length === 0) {
        resultados.innerHTML = "<p>No se encontraron productos.</p>";
        return;
      }

      let html = "<table style='width: 100%; border-collapse: collapse;'>";
      html +=
        "<tr style='background-color: #f2f2f2;'><th style='padding: 8px; border: 1px solid #ddd;'>Código</th><th style='padding: 8px; border: 1px solid #ddd;'>Producto</th><th style='padding: 8px; border: 1px solid #ddd;'>Precio</th><th style='padding: 8px; border: 1px solid #ddd;'>Acción</th></tr>";

      productosFiltrados.forEach((producto) => {
        const codigo = String(producto.codigo_producto).padStart(3, "0");
        html += `<tr>
          <td style='padding: 8px; border: 1px solid #ddd; text-align: center;'>${codigo}</td>
          <td style='padding: 8px; border: 1px solid #ddd;'>${producto.nombre_producto}</td>
          <td style='padding: 8px; border: 1px solid #ddd; text-align: center;'>$${producto.precio_producto}</td>
          <td style='padding: 8px; border: 1px solid #ddd; text-align: center;'>
            <button onclick="agregarProductoPorCodigo('${codigo}')" style="
              background-color: #4CAF50;
              color: white;
              padding: 5px 10px;
              border: none;
              border-radius: 3px;
              cursor: pointer;
            ">Agregar</button>
          </td>
        </tr>`;
      });
      html += "</table>";
      resultados.innerHTML = html;
    } catch (error) {
      const productosFiltrados = productos.filter(
        (p) => p[1].toLowerCase().includes(termino) || p[0].includes(termino)
      );

      if (productosFiltrados.length === 0) {
        resultados.innerHTML = "<p>No se encontraron productos.</p>";
        return;
      }

      let html = "<table style='width: 100%; border-collapse: collapse;'>";
      html +=
        "<tr style='background-color: #f2f2f2;'><th style='padding: 8px; border: 1px solid #ddd;'>Código</th><th style='padding: 8px; border: 1px solid #ddd;'>Producto</th><th style='padding: 8px; border: 1px solid #ddd;'>Precio</th><th style='padding: 8px; border: 1px solid #ddd;'>Acción</th></tr>";

      productosFiltrados.forEach((producto) => {
        html += `<tr>
          <td style='padding: 8px; border: 1px solid #ddd; text-align: center;'>${producto[0]}</td>
          <td style='padding: 8px; border: 1px solid #ddd;'>${producto[1]}</td>
          <td style='padding: 8px; border: 1px solid #ddd; text-align: center;'>$${producto[2]}</td>
          <td style='padding: 8px; border: 1px solid #ddd; text-align: center;'>
            <button onclick="agregarProductoPorCodigo('${producto[0]}')" style="
              background-color: #4CAF50;
              color: white;
              padding: 5px 10px;
              border: none;
              border-radius: 3px;
              cursor: pointer;
            ">Agregar</button>
          </td>
        </tr>`;
      });
      html += "</table>";
      resultados.innerHTML = html;
    }
  };

  function cerrarModal() {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
    modalAbierto = false;
    document.getElementById("entrada-codigo").focus();
  }

  contenido.querySelector("#btn-cerrar-busqueda").onclick = cerrarModal;

  modal.onkeydown = function (e) {
    if (e.key === "Escape") {
      cerrarModal();
    }
  };
}

function agregarProductoPorCodigo(codigo) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i][0] === codigo) {
      agregarProductoATabla(productos[i], 1);
      break;
    }
  }
}

async function mostrarInventario() {
  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  const contenido = document.createElement("div");
  contenido.style.cssText = `
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
  `;

  let html = "<h2>Inventario Completo</h2>";
  html += "<table style='width: 100%; border-collapse: collapse;'>";
  html +=
    "<tr style='background-color: #f2f2f2;'><th style='padding: 8px; border: 1px solid #ddd;'>Código</th><th style='padding: 8px; border: 1px solid #ddd;'>Producto</th><th style='padding: 8px; border: 1px solid #ddd;'>Precio</th></tr>";

  try {
    const response = await fetch(`${API_URL}/productos`);
    if (response.ok) {
      const productosAPI = await response.json();
      productosAPI.forEach((producto) => {
        const codigo = String(producto.codigo_producto).padStart(3, "0");
        html += `<tr>
          <td style='padding: 8px; border: 1px solid #ddd; text-align: center;'>${codigo}</td>
          <td style='padding: 8px; border: 1px solid #ddd;'>${producto.nombre_producto}</td>
          <td style='padding: 8px; border: 1px solid #ddd; text-align: center;'>$${producto.precio_producto}</td>
        </tr>`;
      });
    }
  } catch (error) {
    productos.forEach((producto) => {
      html += `<tr>
        <td style='padding: 8px; border: 1px solid #ddd; text-align: center;'>${producto[0]}</td>
        <td style='padding: 8px; border: 1px solid #ddd;'>${producto[1]}</td>
        <td style='padding: 8px; border: 1px solid #ddd; text-align: center;'>$${producto[2]}</td>
      </tr>`;
    });
  }

  html += "</table><br>";
  html += `<button id="btn-cerrar-inventario" style="
    background-color: #f44336;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  ">Cerrar</button>`;

  contenido.innerHTML = html;
  modal.appendChild(contenido);
  document.body.appendChild(modal);
  modalAbierto = true;

  function cerrarModal() {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
    modalAbierto = false;
    document.getElementById("entrada-codigo").focus();
  }

  contenido.querySelector("#btn-cerrar-inventario").onclick = cerrarModal;

  modal.onkeydown = function (e) {
    if (e.key === "Escape") {
      cerrarModal();
    }
  };
}
