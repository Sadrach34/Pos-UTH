// Array de 100 productos con código, nombre y precio
const productos = [
  ["P001", "Laptop HP", 899.99],
  ["P002", "Mouse Logitech", 25.5],
  ["P003", "Teclado Mecánico", 75.0],
  ["P004", 'Monitor Samsung 24"', 189.99],
  ["P005", "Webcam HD", 45.99],
  ["P006", "Auriculares Bluetooth", 55.0],
  ["P007", "Disco Duro Externo 1TB", 65.0],
  ["P008", "Memoria USB 64GB", 15.99],
  ["P009", "Cable HDMI", 12.5],
  ["P010", "Hub USB 4 Puertos", 18.99],
  ["P011", "Mousepad Gaming", 22.0],
  ["P012", "Silla Gamer", 249.99],
  ["P013", "Escritorio Ajustable", 399.99],
  ["P014", "Lámpara LED Escritorio", 35.0],
  ["P015", "Soporte para Laptop", 28.5],
  ["P016", "Micrófono USB", 65.0],
  ["P017", 'Tablet Android 10"', 199.99],
  ["P018", "Cargador Inalámbrico", 24.99],
  ["P019", "Adaptador USB-C", 16.5],
  ["P020", "Router WiFi", 89.99],
  ["P021", "Impresora Multifuncional", 149.99],
  ["P022", "Scanner Portátil", 125.0],
  ["P023", "Proyector LED", 299.99],
  ["P024", "Smartwatch", 179.99],
  ["P025", "Audífonos con Cable", 19.99],
  ["P026", "Bocinas Bluetooth", 45.0],
  ["P027", "Barra de Sonido", 129.99],
  ["P028", "Cámara Web 4K", 89.99],
  ["P029", "Ventilador USB", 14.99],
  ["P030", "Base Refrigeradora Laptop", 32.0],
  ["P031", "Protector de Pantalla", 9.99],
  ["P032", 'Funda para Laptop 15"', 22.5],
  ["P033", "Mochila para Portátil", 45.0],
  ["P034", "Batería Externa 20000mAh", 35.99],
  ["P035", "Cable Lightning", 14.99],
  ["P036", "Cable USB-C a USB-A", 11.5],
  ["P037", "Lector de Tarjetas SD", 12.99],
  ["P038", "Organizador de Cables", 8.99],
  ["P039", "Filtro de Privacidad", 29.99],
  ["P040", "Luz LED para Video", 42.0],
  ["P041", "Trípode para Cámara", 35.5],
  ["P042", "Gimbal para Smartphone", 89.0],
  ["P043", "Drone con Cámara", 399.99],
  ["P044", "Consola de Videojuegos", 499.99],
  ["P045", "Control Inalámbrico", 59.99],
  ["P046", "Juego de Video AAA", 59.99],
  ["P047", "Tarjeta Gráfica", 549.99],
  ["P048", "Procesador Intel i7", 329.99],
  ["P049", "Placa Madre ATX", 189.99],
  ["P050", "Memoria RAM 16GB", 79.99],
  ["P051", "SSD 500GB", 65.0],
  ["P052", "Fuente de Poder 650W", 89.99],
  ["P053", "Case Gaming RGB", 119.99],
  ["P054", "Pasta Térmica", 8.99],
  ["P055", "Ventilador PC 120mm", 15.99],
  ["P056", "Kit de Limpieza PC", 12.5],
  ["P057", "Cable Ethernet 5m", 9.99],
  ["P058", "Switch de Red 8 Puertos", 45.0],
  ["P059", "Extensor WiFi", 32.99],
  ["P060", "Cámara de Seguridad", 79.99],
  ["P061", "Timbre Inteligente", 129.99],
  ["P062", "Bombilla Inteligente", 18.99],
  ["P063", "Enchufe Inteligente", 14.99],
  ["P064", "Asistente de Voz", 89.99],
  ["P065", "Termostato Inteligente", 149.99],
  ["P066", "Cerradura Inteligente", 199.99],
  ["P067", "Detector de Humo", 29.99],
  ["P068", "Sensor de Movimiento", 24.99],
  ["P069", "Tira LED RGB 5m", 22.99],
  ["P070", "Panel LED Hexagonal", 39.99],
  ["P071", "Reloj Despertador Digital", 19.99],
  ["P072", "Balanza Inteligente", 35.0],
  ["P073", "Purificador de Aire", 129.99],
  ["P074", "Humidificador", 45.0],
  ["P075", "Calefactor Portátil", 39.99],
  ["P076", "Ventilador de Torre", 69.99],
  ["P077", "Cafetera Programable", 79.99],
  ["P078", "Licuadora", 49.99],
  ["P079", "Batidora de Mano", 29.99],
  ["P080", "Tostadora", 34.99],
  ["P081", "Sandwichera", 24.99],
  ["P082", "Olla Arrocera", 39.99],
  ["P083", "Freidora de Aire", 99.99],
  ["P084", "Microondas", 119.99],
  ["P085", "Hervidor Eléctrico", 27.99],
  ["P086", "Exprimidor de Jugos", 55.0],
  ["P087", "Procesador de Alimentos", 89.99],
  ["P088", "Báscula de Cocina", 16.99],
  ["P089", "Set de Cuchillos", 45.0],
  ["P090", "Tabla de Cortar", 18.99],
  ["P091", "Sartén Antiadherente", 32.99],
  ["P092", "Olla de Presión", 69.99],
  ["P093", "Juego de Ollas", 89.99],
  ["P094", "Plancha de Vapor", 45.0],
  ["P095", "Aspiradora Robot", 249.99],
  ["P096", "Aspiradora Vertical", 159.99],
  ["P097", "Escoba Eléctrica", 79.99],
  ["P098", "Mopa a Vapor", 89.99],
  ["P099", "Dispensador de Agua", 119.99],
  ["P100", "Mini Refrigerador", 149.99],
];

// Función para mostrar los productos
function mostrarProductos() {
  console.log("Código | Nombre | Precio");
  console.log("-".repeat(50));
  productos.forEach((producto) => {
    console.log(`${producto[0]} | ${producto[1]} | $${producto[2]}`);
  });
}

// Función para buscar producto por código
function buscarProductoPorCodigo(codigo) {
  return productos.find((producto) => producto[0] === codigo);
}

// Función para filtrar productos por rango de precio
function filtrarPorPrecio(precioMin, precioMax) {
  return productos.filter(
    (producto) => producto[2] >= precioMin && producto[2] <= precioMax
  );
}
