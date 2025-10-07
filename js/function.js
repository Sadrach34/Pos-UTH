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

// Función para buscar producto por código
// Variable para mantener el total de productos
let totalProductos = 0;

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
          const subtotal = productos[i][2] * cantidad;

          // Llenar las celdas
          celdaCantidad.innerHTML = cantidad;
          celdaNombre.innerHTML = productos[i][1];
          celdaPrecio.innerHTML = `$${productos[i][2]}`;
          celdaTotal.innerHTML = `$${subtotal.toFixed(2)}`;

          // Agregar al total general
          totalProductos += subtotal;

          // Actualizar la visualización del total
          const elementoTotal = document.getElementById("total");
          if (elementoTotal) {
            elementoTotal.innerHTML = `Total: $${totalProductos.toFixed(2)}`;
          }

          // Limpiar el campo de entrada
          document.getElementById("entrada-codigo").value = "";

          break; // Salir del bucle una vez que se encuentra el producto
        }
      }
    }
  }

  // Identificamos la tecla esc, la cual elimina el último producto agregado
  else if (evento.key === "Escape") {
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
    }
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
}
