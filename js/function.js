// Array de 100 productos con código, nombre y precio
const productos = [
  ["001", "Laptop HP", 899.99],
  ["002", "Mouse Logitech", 25.5],
  ["003", "Teclado Mecánico", 75.0],
  ["004", 'Monitor Samsung 24"', 189.99],
  ["005", "Webcam HD", 45.99],
  ["006", "Auriculares Bluetooth", 55.0],
  ["007", "Disco Duro Externo 1TB", 65.0],
  ["008", "Memoria USB 64GB", 15.99],
  ["009", "Cable HDMI", 12.5],
  ["010", "Hub USB 4 Puertos", 18.99],
  ["011", "Mousepad Gaming", 22.0],
  ["012", "Silla Gamer", 249.99],
  ["013", "Escritorio Ajustable", 399.99],
  ["014", "Lámpara LED Escritorio", 35.0],
  ["015", "Soporte para Laptop", 28.5],
  ["016", "Micrófono USB", 65.0],
  ["017", 'Tablet Android 10"', 199.99],
  ["018", "Cargador Inalámbrico", 24.99],
  ["019", "Adaptador USB-C", 16.5],
  ["020", "Router WiFi", 89.99],
  ["021", "Impresora Multifuncional", 149.99],
  ["022", "Scanner Portátil", 125.0],
  ["023", "Proyector LED", 299.99],
  ["024", "Smartwatch", 179.99],
  ["025", "Audífonos con Cable", 19.99],
  ["026", "Bocinas Bluetooth", 45.0],
  ["027", "Barra de Sonido", 129.99],
  ["028", "Cámara Web 4K", 89.99],
  ["029", "Ventilador USB", 14.99],
  ["030", "Base Refrigeradora Laptop", 32.0],
  ["031", "Protector de Pantalla", 9.99],
  ["032", 'Funda para Laptop 15"', 22.5],
  ["033", "Mochila para Portátil", 45.0],
  ["034", "Batería Externa 20000mAh", 35.99],
  ["035", "Cable Lightning", 14.99],
  ["036", "Cable USB-C a USB-A", 11.5],
  ["037", "Lector de Tarjetas SD", 12.99],
  ["038", "Organizador de Cables", 8.99],
  ["039", "Filtro de Privacidad", 29.99],
  ["040", "Luz LED para Video", 42.0],
  ["041", "Trípode para Cámara", 35.5],
  ["042", "Gimbal para Smartphone", 89.0],
  ["043", "Drone con Cámara", 399.99],
  ["044", "Consola de Videojuegos", 499.99],
  ["045", "Control Inalámbrico", 59.99],
  ["046", "Juego de Video AAA", 59.99],
  ["047", "Tarjeta Gráfica", 549.99],
  ["048", "Procesador Intel i7", 329.99],
  ["049", "Placa Madre ATX", 189.99],
  ["050", "Memoria RAM 16GB", 79.99],
  ["051", "SSD 500GB", 65.0],
  ["052", "Fuente de Poder 650W", 89.99],
  ["053", "Case Gaming RGB", 119.99],
  ["054", "Pasta Térmica", 8.99],
  ["055", "Ventilador PC 120mm", 15.99],
  ["056", "Kit de Limpieza PC", 12.5],
  ["057", "Cable Ethernet 5m", 9.99],
  ["058", "Switch de Red 8 Puertos", 45.0],
  ["059", "Extensor WiFi", 32.99],
  ["060", "Cámara de Seguridad", 79.99],
  ["061", "Timbre Inteligente", 129.99],
  ["062", "Bombilla Inteligente", 18.99],
  ["063", "Enchufe Inteligente", 14.99],
  ["064", "Asistente de Voz", 89.99],
  ["065", "Termostato Inteligente", 149.99],
  ["066", "Cerradura Inteligente", 199.99],
  ["067", "Detector de Humo", 29.99],
  ["068", "Sensor de Movimiento", 24.99],
  ["069", "Tira LED RGB 5m", 22.99],
  ["070", "Panel LED Hexagonal", 39.99],
  ["071", "Reloj Despertador Digital", 19.99],
  ["072", "Balanza Inteligente", 35.0],
  ["073", "Purificador de Aire", 129.99],
  ["074", "Humidificador", 45.0],
  ["075", "Calefactor Portátil", 39.99],
  ["076", "Ventilador de Torre", 69.99],
  ["077", "Cafetera Programable", 79.99],
  ["078", "Licuadora", 49.99],
  ["079", "Batidora de Mano", 29.99],
  ["080", "Tostadora", 34.99],
  ["081", "Sandwichera", 24.99],
  ["082", "Olla Arrocera", 39.99],
  ["083", "Freidora de Aire", 99.99],
  ["084", "Microondas", 119.99],
  ["085", "Hervidor Eléctrico", 27.99],
  ["086", "Exprimidor de Jugos", 55.0],
  ["087", "Procesador de Alimentos", 89.99],
  ["088", "Báscula de Cocina", 16.99],
  ["089", "Set de Cuchillos", 45.0],
  ["090", "Tabla de Cortar", 18.99],
  ["091", "Sartén Antiadherente", 32.99],
  ["092", "Olla de Presión", 69.99],
  ["093", "Juego de Ollas", 89.99],
  ["094", "Plancha de Vapor", 45.0],
  ["095", "Aspiradora Robot", 249.99],
  ["096", "Aspiradora Vertical", 159.99],
  ["097", "Escoba Eléctrica", 79.99],
  ["098", "Mopa a Vapor", 89.99],
  ["099", "Dispensador de Agua", 119.99],
  ["100", "Mini Refrigerador", 149.99],
];

// Variables globales
let totalProductos = 0;
let modalAbierto = false;
let filaSeleccionada = -1; // Índice de la fila seleccionada (-1 = ninguna)

// Cuando se carga la página, configurar eventos globales
document.addEventListener("DOMContentLoaded", function () {
  // Escuchar eventos de teclado en todo el documento
  document.addEventListener("keydown", manejarEventoGlobal);

  // Auto-enfocar el input al cargar
  const inputCodigo = document.getElementById("entrada-codigo");
  if (inputCodigo) {
    inputCodigo.focus();
  }
});

// Función para seleccionar una fila visualmente
function seleccionarFila(indice) {
  const tabla = document.getElementById("cuerpo-datos");

  // Remover selección previa
  for (let i = 0; i < tabla.rows.length; i++) {
    tabla.rows[i].classList.remove("seleccionada");
  }

  // Aplicar selección a la fila especificada
  if (indice >= 0 && indice < tabla.rows.length) {
    filaSeleccionada = indice;
    tabla.rows[indice].classList.add("seleccionada");

    // Hacer scroll para asegurar que la fila seleccionada sea visible
    tabla.rows[indice].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  } else {
    filaSeleccionada = -1;
  }
}

// Esta función maneja todos los eventos de teclado en la página
function manejarEventoGlobal(evento) {
  // Si hay un modal abierto, solo manejar eventos dentro del modal
  if (modalAbierto && evento.target.id !== "input-clave") {
    return;
  }

  // Si el usuario está escribiendo en un input de password (modal), no interferir
  if (evento.target.type === "password") {
    return;
  }

  // Números y letras (excepto teclas especiales) - auto-enfocar input
  if (
    evento.key.length === 1 &&
    !evento.ctrlKey &&
    !evento.altKey &&
    !evento.metaKey
  ) {
    const inputCodigo = document.getElementById("entrada-codigo");

    // Si no está enfocado el input, enfocarlo y permitir que se escriba
    if (document.activeElement !== inputCodigo) {
      inputCodigo.focus();
      // No prevenir el evento para que el carácter se escriba
    }
  }

  // Llamar a la función principal de manejo de productos
  buscarProductoPorCodigo(evento);
}

// Función para buscar producto por código
function buscarProductoPorCodigo(evento) {
  if (evento.key === "Enter") {
    let codigoCompleto = document.getElementById("entrada-codigo").value;

    if (codigoCompleto.length > 0) {
      let cantidad = 1;
      let codigo = codigoCompleto;

      // Verificar si hay multiplicación (formato: cantidad*codigo)
      if (codigoCompleto.indexOf("*") !== -1) {
        const partes = codigoCompleto.split("*");
        cantidad = parseInt(partes[0]) || 1;
        codigo = partes[1];
      }

      for (let i = 0; i < productos.length; i++) {
        if (productos[i][0] === codigo) {
          const tabla = document.getElementById("cuerpo-datos");
          const nombreProducto = productos[i][1];
          const precioUnitario = productos[i][2];

          // Buscar si el producto ya existe en la tabla
          let productoExistente = null;
          let filaExistente = -1;

          for (let j = 0; j < tabla.rows.length; j++) {
            if (tabla.rows[j].cells[1].innerText === nombreProducto) {
              productoExistente = tabla.rows[j];
              filaExistente = j;
              break;
            }
          }

          if (productoExistente) {
            // El producto ya existe, sumar la cantidad
            const cantidadActual = parseInt(
              productoExistente.cells[0].innerText
            );
            const nuevaCantidad = cantidadActual + cantidad;

            // Calcular el subtotal anterior y el nuevo
            const subtotalAnterior = parseFloat(
              productoExistente.cells[3].innerText.replace("$", "")
            );
            const nuevoSubtotal = precioUnitario * nuevaCantidad;

            // Actualizar las celdas
            productoExistente.cells[0].innerHTML = nuevaCantidad;
            productoExistente.cells[3].innerHTML = `$${nuevoSubtotal.toFixed(
              2
            )}`;

            // Actualizar el total general (restar el anterior y sumar el nuevo)
            totalProductos = totalProductos - subtotalAnterior + nuevoSubtotal;
          } else {
            // El producto no existe, crear nueva fila
            const renglon = tabla.insertRow();
            const celdaCantidad = renglon.insertCell(0);
            const celdaNombre = renglon.insertCell(1);
            const celdaPrecio = renglon.insertCell(2);
            const celdaTotal = renglon.insertCell(3);

            // Aplicar estilos
            celdaCantidad.setAttribute("style", "text-align: center;");
            celdaNombre.setAttribute("style", "text-align: center;");
            celdaPrecio.setAttribute("style", "text-align: center;");
            celdaTotal.setAttribute("style", "text-align: center;");

            // Calcular el subtotal del producto
            const subtotal = precioUnitario * cantidad;

            // Llenar las celdas
            celdaCantidad.innerHTML = cantidad;
            celdaNombre.innerHTML = nombreProducto;
            celdaPrecio.innerHTML = `$${precioUnitario}`;
            celdaTotal.innerHTML = `$${subtotal.toFixed(2)}`;

            // Agregar al total general
            totalProductos += subtotal;
          }

          // Actualizar la visualización del total
          const elementoTotal = document.getElementById("total");
          if (elementoTotal) {
            elementoTotal.innerHTML = `Total: $${totalProductos.toFixed(2)}`;
          }

          // Seleccionar automáticamente la última fila (la que acaba de ser agregada/modificada)
          if (productoExistente) {
            // Si el producto ya existía, seleccionar esa fila
            seleccionarFila(filaExistente);
          } else {
            // Si es nuevo, seleccionar la última fila
            seleccionarFila(tabla.rows.length - 1);
          }

          // Limpiar el campo de entrada
          document.getElementById("entrada-codigo").value = "";

          break; // Salir del bucle una vez que se encuentra el producto
        }
      }
    }
  }

  // Teclas de flecha para navegar por los productos
  else if (evento.key === "ArrowUp") {
    evento.preventDefault();
    const tabla = document.getElementById("cuerpo-datos");
    if (tabla.rows.length > 0) {
      if (filaSeleccionada <= 0) {
        // Si no hay selección o estamos en la primera, ir a la última
        seleccionarFila(tabla.rows.length - 1);
      } else {
        // Ir a la fila anterior
        seleccionarFila(filaSeleccionada - 1);
      }
    }
  }

  // Tecla de flecha hacia abajo para navegar por los productos
  else if (evento.key === "ArrowDown") {
    evento.preventDefault();
    const tabla = document.getElementById("cuerpo-datos");
    if (tabla.rows.length > 0) {
      if (filaSeleccionada < 0 || filaSeleccionada >= tabla.rows.length - 1) {
        // Si no hay selección o estamos en la última, ir a la primera
        seleccionarFila(0);
      } else {
        // Ir a la fila siguiente
        seleccionarFila(filaSeleccionada + 1);
      }
    }
  }

  // Identificamos la tecla Delete, la cual elimina el último producto agregado
  else if (evento.key === "Delete") {
    const tabla = document.getElementById("cuerpo-datos");
    if (tabla.rows.length > 0) {
      const ultimaFila = tabla.rows[tabla.rows.length - 1];
      const totalCelda = ultimaFila.cells[3].innerText;
      const totalValor = parseFloat(totalCelda.replace("$", ""));
      totalProductos -= totalValor;
      tabla.deleteRow(tabla.rows.length - 1);

      // Actualizar la visualización del total
      const elementoTotal = document.getElementById("total");
      if (elementoTotal) {
        elementoTotal.innerHTML = `Total: $${totalProductos.toFixed(2)}`;
      }

      // Actualizar la selección
      if (filaSeleccionada >= tabla.rows.length) {
        seleccionarFila(tabla.rows.length - 1);
      }
    }
  }

  // Tecla + incrementa la cantidad del producto seleccionado
  else if (evento.key === "+") {
    evento.preventDefault(); // Prevenir el comportamiento por defecto
    const tabla = document.getElementById("cuerpo-datos");

    if (tabla.rows.length > 0) {
      // Si no hay fila seleccionada, seleccionar la última
      if (filaSeleccionada < 0 || filaSeleccionada >= tabla.rows.length) {
        filaSeleccionada = tabla.rows.length - 1;
        seleccionarFila(filaSeleccionada);
      }

      const filaActual = tabla.rows[filaSeleccionada];
      const nombreProducto = filaActual.cells[1].innerText;

      // Buscar el producto en el array para obtener su precio
      for (let i = 0; i < productos.length; i++) {
        if (productos[i][1] === nombreProducto) {
          // Obtener cantidad actual y precio unitario
          const cantidadActual = parseInt(filaActual.cells[0].innerText);
          const precioUnitario = productos[i][2];

          // Incrementar cantidad
          const nuevaCantidad = cantidadActual + 1;

          // Calcular nuevo subtotal
          const nuevoSubtotal = precioUnitario * nuevaCantidad;

          // Obtener el subtotal anterior para restarlo del total
          const subtotalAnterior = parseFloat(
            filaActual.cells[3].innerText.replace("$", "")
          );

          // Actualizar las celdas
          filaActual.cells[0].innerHTML = nuevaCantidad;
          filaActual.cells[3].innerHTML = `$${nuevoSubtotal.toFixed(2)}`;

          // Actualizar el total general (restar el anterior y sumar el nuevo)
          totalProductos = totalProductos - subtotalAnterior + nuevoSubtotal;

          // Actualizar la visualización del total
          const elementoTotal = document.getElementById("total");
          if (elementoTotal) {
            elementoTotal.innerHTML = `Total: $${totalProductos.toFixed(2)}`;
          }

          break; // Salir del bucle una vez que se encuentra el producto
        }
      }
    }
  }

  // Tecla - decrementa la cantidad del producto seleccionado
  else if (evento.key === "-") {
    evento.preventDefault(); // Prevenir el comportamiento por defecto
    const tabla = document.getElementById("cuerpo-datos");

    if (tabla.rows.length > 0) {
      // Si no hay fila seleccionada, seleccionar la última
      if (filaSeleccionada < 0 || filaSeleccionada >= tabla.rows.length) {
        filaSeleccionada = tabla.rows.length - 1;
        seleccionarFila(filaSeleccionada);
      }

      const filaActual = tabla.rows[filaSeleccionada];
      const nombreProducto = filaActual.cells[1].innerText;

      // Buscar el producto en el array para obtener su precio
      for (let i = 0; i < productos.length; i++) {
        if (productos[i][1] === nombreProducto) {
          // Obtener cantidad actual y precio unitario
          const cantidadActual = parseInt(filaActual.cells[0].innerText);
          const precioUnitario = productos[i][2];

          // Decrementar cantidad
          const nuevaCantidad = cantidadActual - 1;

          if (nuevaCantidad < 1) {
            const totalCelda = filaActual.cells[3].innerText;
            const totalValor = parseFloat(totalCelda.replace("$", ""));
            totalProductos -= totalValor;
            tabla.deleteRow(filaSeleccionada);

            // Actualizar la visualización del total
            const elementoTotal = document.getElementById("total");
            if (elementoTotal) {
              elementoTotal.innerHTML = `Total: $${totalProductos.toFixed(2)}`;
            }

            // Actualizar la selección después de eliminar
            if (tabla.rows.length > 0) {
              if (filaSeleccionada >= tabla.rows.length) {
                seleccionarFila(tabla.rows.length - 1);
              } else {
                seleccionarFila(filaSeleccionada);
              }
            } else {
              filaSeleccionada = -1;
            }
            return;
          }

          // Calcular nuevo subtotal
          const nuevoSubtotal = precioUnitario * nuevaCantidad;

          // Obtener el subtotal anterior para restarlo del total
          const subtotalAnterior = parseFloat(
            filaActual.cells[3].innerText.replace("$", "")
          );

          // Actualizar las celdas
          filaActual.cells[0].innerHTML = nuevaCantidad;
          filaActual.cells[3].innerHTML = `$${nuevoSubtotal.toFixed(2)}`;

          // Actualizar el total general (restar el anterior y sumar el nuevo)
          totalProductos = totalProductos - subtotalAnterior + nuevoSubtotal;

          // Actualizar la visualización del total
          const elementoTotal = document.getElementById("total");
          if (elementoTotal) {
            elementoTotal.innerHTML = `Total: $${totalProductos.toFixed(2)}`;
          }

          break; // Salir del bucle una vez que se encuentra el producto
        }
      }
    }
  }

  // Al presionar la tecla C se cancela la venta, se abre un prompt peguntando la clave 12345 y después muestra ventana de confirmación.
  else if (evento.key === "c" || evento.key === "C") {
    evento.preventDefault(); // Prevenir el comportamiento por defecto del tab

    // Verificar que no haya un modal ya abierto
    if (modalAbierto) {
      return;
    }

    // Verificar que haya productos en la tabla
    const tabla = document.getElementById("cuerpo-datos");
    if (tabla.rows.length === 0) {
      alert("No hay productos para cancelar.");
      return;
    }

    // Marcar que hay un modal abierto
    modalAbierto = true;

    const modal = crearModalContrasena();
    document.body.appendChild(modal);

    // Enfocar el campo de entrada
    const inputClave = document.getElementById("input-clave");
    inputClave.focus();
  }

  // realizar venta (tecla F11) - abrir modal de pago
  else if (evento.key === "F11") {
    evento.preventDefault(); // Prevenir el comportamiento por defecto del tab

    // Verificar que no haya un modal ya abierto
    if (modalAbierto) {
      return;
    }

    // Verificar que haya productos en la tabla
    const tabla = document.getElementById("cuerpo-datos");
    if (tabla.rows.length === 0) {
      alert("No hay productos para vender.");
      return;
    }

    // Marcar que hay un modal abierto
    modalAbierto = true;

    const modal = crearModalPago();
    document.body.appendChild(modal);

    // Enfocar el campo de pago
    const inputPago = document.getElementById("input-pago");
    if (inputPago) {
      inputPago.focus();
    }
  }

  actualizarPrecioTotal();
}

// Función para actualizar el precio total en la interfaz
function actualizarPrecioTotal() {
  // Buscar tanto el elemento precio-total como total para mayor compatibilidad
  let elementoTotal = document.getElementById("precio-total");
  if (!elementoTotal) {
    elementoTotal = document.getElementById("total");
  }

  if (elementoTotal) {
    elementoTotal.innerHTML = `$${totalProductos.toFixed(2)}`;
  }

  // También actualizar cualquier elemento con clase total-amount
  const elementosTotal = document.getElementsByClassName("total-amount");
  for (let i = 0; i < elementosTotal.length; i++) {
    elementosTotal[i].innerHTML = `$${totalProductos.toFixed(2)}`;
  }
}

// Función para crear un modal de entrada de contraseña
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

  // Función para cerrar el modal
  function cerrarModal() {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
    modalAbierto = false; // Marcar que el modal está cerrado
  }

  // Manejar el botón de confirmar
  contenido.querySelector("#btn-confirmar").onclick = function () {
    const clave = document.getElementById("input-clave").value;
    validarYCancelarVenta(clave);
    cerrarModal();
  };

  // Manejar el botón de cancelar
  contenido.querySelector("#btn-cancelar").onclick = function () {
    cerrarModal();
  };

  // Permitir confirmar con Enter
  contenido.querySelector("#input-clave").onkeypress = function (e) {
    if (e.key === "Enter") {
      const clave = document.getElementById("input-clave").value;
      validarYCancelarVenta(clave);
      cerrarModal();
    }
  };

  // Permitir cerrar con Escape
  modal.onkeydown = function (e) {
    if (e.key === "Escape") {
      cerrarModal();
    }
  };

  return modal;
}

// Función para validar la clave y cancelar la venta
function validarYCancelarVenta(clave) {
  if (clave === "12345") {
    const confirmacion = confirm(
      "¿Está seguro de que desea cancelar la venta?"
    );
    if (confirmacion) {
      // Limpiar la tabla de productos
      const tabla = document.getElementById("cuerpo-datos");
      while (tabla.rows.length > 0) {
        tabla.deleteRow(0);
      }
      // Resetear el total
      totalProductos = 0;
      const elementoTotal = document.getElementById("total");
      if (elementoTotal) {
        elementoTotal.innerHTML = `Total: $${totalProductos.toFixed(2)}`;
      }
      alert("Venta cancelada.");
    }
  } else if (clave !== "") {
    alert("Clave incorrecta. No se pudo cancelar la venta.");
  }
}

// Función para crear modal de pago
function crearModalPago() {
  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  const contenido = document.createElement("div");
  contenido.style.cssText = `
    background: linear-gradient(145deg, #ffffff, #f8f9fa);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
    text-align: center;
    min-width: 400px;
    border: 3px solid transparent;
    background-clip: padding-box;
  `;

  contenido.innerHTML = `
    <h2 style="
      margin: 0 0 30px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 2em;
      font-weight: 800;
    ">💰 Procesar Pago</h2>
    
    <div style="
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 15px;
      margin-bottom: 25px;
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    ">
      <p style="margin: 0 0 10px 0; font-size: 1.1em; opacity: 0.9;">Total a Pagar:</p>
      <p id="total-pago" style="
        margin: 0;
        font-size: 2.5em;
        font-weight: bold;
        letter-spacing: 2px;
      ">$${totalProductos.toFixed(2)}</p>
    </div>
    
    <div style="margin-bottom: 25px;">
      <label style="
        display: block;
        margin-bottom: 10px;
        font-size: 1.2em;
        color: #333;
        font-weight: 600;
      ">Con cuánto paga:</label>
      <input type="number" id="input-pago" step="0.01" min="0" style="
        font-size: 1.8em;
        padding: 15px;
        width: calc(100% - 30px);
        border: 3px solid transparent;
        border-radius: 10px;
        text-align: center;
        background: linear-gradient(white, white) padding-box,
                    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        font-weight: 600;
      " />
    </div>
    
    <div id="cambio-container" style="
      background: #f5f5f5;
      padding: 20px;
      border-radius: 15px;
      margin-bottom: 25px;
      min-height: 80px;
      border: 2px solid #ddd;
      transition: all 0.3s ease;
    ">
      <p style="margin: 0 0 10px 0; font-size: 1.1em; color: #666; font-weight: 600; transition: all 0.3s ease;">Cambio:</p>
      <p id="cambio-valor" style="
        margin: 0;
        font-size: 2.2em;
        font-weight: bold;
        color: #999;
        transition: all 0.3s ease;
      ">$0.00</p>
    </div>
    
    <div style="display: flex; gap: 15px; justify-content: center;">
      <button id="btn-finalizar" disabled style="
        background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
        color: white;
        padding: 15px 30px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 1.1em;
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
        transition: all 0.3s ease;
        opacity: 0.5;
      " onmouseover="if(!this.disabled) {this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(76, 175, 80, 0.5)'}"
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(76, 175, 80, 0.4)'">
        ✓ Finalizar Venta
      </button>
      
      <button id="btn-cancelar-pago" style="
        background: linear-gradient(135deg, #f44336 0%, #e53935 100%);
        color: white;
        padding: 15px 30px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 1.1em;
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(244, 67, 54, 0.4);
        transition: all 0.3s ease;
      " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(244, 67, 54, 0.5)'"
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(244, 67, 54, 0.4)'">
        Cancelar
      </button>
    </div>
  `;

  modal.appendChild(contenido);

  // Función para cerrar el modal
  function cerrarModal() {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
    modalAbierto = false;
    // Re-enfocar el input de código
    const inputCodigo = document.getElementById("entrada-codigo");
    if (inputCodigo) {
      inputCodigo.focus();
    }
  }

  // Función para calcular el cambio dinámicamente
  function calcularCambio() {
    const inputPago = document.getElementById("input-pago");
    const pago = parseFloat(inputPago.value) || 0;
    const cambioContainer = document.getElementById("cambio-container");
    const cambioValor = document.getElementById("cambio-valor");
    const btnFinalizar = document.getElementById("btn-finalizar");

    // Si no hay valor o es 0, ocultar el cambio y deshabilitar finalizar
    if (pago <= 0) {
      cambioContainer.style.display = "none";
      btnFinalizar.disabled = true;
      btnFinalizar.style.opacity = "0.5";
      btnFinalizar.style.cursor = "not-allowed";
      return;
    }

    // Si el pago es menor al total, mostrar en rojo
    if (pago < totalProductos) {
      const faltante = totalProductos - pago;
      cambioValor.innerText = `-$${faltante.toFixed(2)}`;
      cambioValor.style.color = "#c62828";
      cambioContainer.style.background = "#ffebee";
      cambioContainer.style.borderColor = "#ef5350";
      cambioContainer.querySelector("p").innerText = "Falta:";
      cambioContainer.querySelector("p").style.color = "#c62828";
      cambioContainer.style.display = "block";

      // Deshabilitar botón de finalizar
      btnFinalizar.disabled = true;
      btnFinalizar.style.opacity = "0.5";
      btnFinalizar.style.cursor = "not-allowed";
      return;
    }

    // Si el pago es suficiente, calcular y mostrar el cambio en verde
    const cambio = pago - totalProductos;
    cambioValor.innerText = `$${cambio.toFixed(2)}`;
    cambioValor.style.color = "#1b5e20";
    cambioContainer.style.background = "#e8f5e9";
    cambioContainer.style.borderColor = "#4caf50";
    cambioContainer.querySelector("p").innerText = "Cambio:";
    cambioContainer.querySelector("p").style.color = "#2e7d32";
    cambioContainer.style.display = "block";

    // Habilitar botón de finalizar
    btnFinalizar.disabled = false;
    btnFinalizar.style.opacity = "1";
    btnFinalizar.style.cursor = "pointer";
  }

  // Función para finalizar la venta
  function finalizarVenta() {
    // Limpiar la tabla de productos
    const tabla = document.getElementById("cuerpo-datos");
    while (tabla.rows.length > 0) {
      tabla.deleteRow(0);
    }

    // Resetear el total
    totalProductos = 0;
    filaSeleccionada = -1;
    const elementoTotal = document.getElementById("total");
    if (elementoTotal) {
      elementoTotal.innerHTML = `$${totalProductos.toFixed(2)}`;
    }

    alert("✓ Venta realizada con éxito!");
    cerrarModal();
  }

  // Calcular cambio dinámicamente mientras se escribe
  const inputPago = contenido.querySelector("#input-pago");
  inputPago.oninput = calcularCambio;

  // También calcular al cambiar el valor
  inputPago.onchange = calcularCambio;

  // Manejar botón de finalizar
  contenido.querySelector("#btn-finalizar").onclick = finalizarVenta;

  // Manejar botón de cancelar
  contenido.querySelector("#btn-cancelar-pago").onclick = cerrarModal;

  // Permitir finalizar con Enter (solo si el botón está habilitado)
  inputPago.onkeypress = function (e) {
    if (e.key === "Enter") {
      const btnFinalizar = document.getElementById("btn-finalizar");
      if (!btnFinalizar.disabled) {
        finalizarVenta();
      }
    }
  };

  // Permitir cerrar con Escape
  modal.onkeydown = function (e) {
    if (e.key === "Escape") {
      cerrarModal();
    }
  };

  return modal;
}
