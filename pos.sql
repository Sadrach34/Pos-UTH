/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-12.0.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: pos
-- ------------------------------------------------------
-- Server version	12.0.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `codigo_producto` int(10) unsigned NOT NULL CHECK (`codigo_producto` > 0),
  `nombre_producto` varchar(255) NOT NULL CHECK (octet_length(trim(`nombre_producto`)) > 0),
  `precio_producto` double(10,2) unsigned NOT NULL CHECK (`precio_producto` >= 0.10),
  PRIMARY KEY (`codigo_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `productos` VALUES
(1,'Laptop HP',899.99),
(2,'Mouse Logitech',25.50),
(3,'Teclado Mecánico',75.00),
(4,'Monitor Samsung 24\"',189.99),
(5,'Webcam HD',45.99),
(6,'Auriculares Bluetooth',55.00),
(7,'Disco Duro Externo 1TB',65.00),
(8,'Memoria USB 64GB',15.99),
(9,'Cable HDMI',12.50),
(10,'Hub USB 4 Puertos',18.99),
(11,'Mousepad Gaming',22.00),
(12,'Silla Gamer',249.99),
(13,'Escritorio Ajustable',399.99),
(14,'Lámpara LED Escritorio',35.00),
(15,'Soporte para Laptop',28.50),
(16,'Micrófono USB',65.00),
(17,'Tablet Android 10\"',199.99),
(18,'Cargador Inalámbrico',24.99),
(19,'Adaptador USB-C',16.50),
(20,'Router WiFi',89.99),
(21,'Impresora Multifuncional',149.99),
(22,'Scanner Portátil',125.00),
(23,'Proyector LED',299.99),
(24,'Smartwatch',179.99),
(25,'Audífonos con Cable',19.99),
(26,'Bocinas Bluetooth',45.00),
(27,'Barra de Sonido',129.99),
(28,'Cámara Web 4K',89.99),
(29,'Ventilador USB',14.99),
(30,'Base Refrigeradora Laptop',32.00),
(31,'Protector de Pantalla',9.99),
(32,'Funda para Laptop 15\"',22.50),
(33,'Mochila para Portátil',45.00),
(34,'Batería Externa 20000mAh',35.99),
(35,'Cable Lightning',14.99),
(36,'Cable USB-C a USB-A',11.50),
(37,'Lector de Tarjetas SD',12.99),
(38,'Organizador de Cables',8.99),
(39,'Filtro de Privacidad',29.99),
(40,'Luz LED para Video',42.00),
(41,'Trípode para Cámara',35.50),
(42,'Gimbal para Smartphone',89.00),
(43,'Drone con Cámara',399.99),
(44,'Consola de Videojuegos',499.99),
(45,'Control Inalámbrico',59.99),
(46,'Juego de Video AAA',59.99),
(47,'Tarjeta Gráfica',549.99),
(48,'Procesador Intel i7',329.99),
(49,'Placa Madre ATX',189.99),
(50,'Memoria RAM 16GB',79.99),
(51,'SSD 500GB',65.00),
(52,'Fuente de Poder 650W',89.99),
(53,'Case Gaming RGB',119.99),
(54,'Pasta Térmica',8.99),
(55,'Ventilador PC 120mm',15.99),
(56,'Kit de Limpieza PC',12.50),
(57,'Cable Ethernet 5m',9.99),
(58,'Switch de Red 8 Puertos',45.00),
(59,'Extensor WiFi',32.99),
(60,'Cámara de Seguridad',79.99),
(61,'Timbre Inteligente',129.99),
(62,'Bombilla Inteligente',18.99),
(63,'Enchufe Inteligente',14.99),
(64,'Asistente de Voz',89.99),
(65,'Termostato Inteligente',149.99),
(66,'Cerradura Inteligente',199.99),
(67,'Detector de Humo',29.99),
(68,'Sensor de Movimiento',24.99),
(69,'Tira LED RGB 5m',22.99),
(70,'Panel LED Hexagonal',39.99),
(71,'Reloj Despertador Digital',19.99),
(72,'Balanza Inteligente',35.00),
(73,'Purificador de Aire',129.99),
(74,'Humidificador',45.00),
(75,'Calefactor Portátil',39.99),
(76,'Ventilador de Torre',69.99),
(77,'Cafetera Programable',79.99),
(78,'Licuadora',49.99),
(79,'Batidora de Mano',29.99),
(80,'Tostadora',34.99),
(81,'Sandwichera',24.99),
(82,'Olla Arrocera',39.99),
(83,'Freidora de Aire',99.99),
(84,'Microondas',119.99),
(85,'Hervidor Eléctrico',27.99),
(86,'Exprimidor de Jugos',55.00),
(87,'Procesador de Alimentos',89.99),
(88,'Báscula de Cocina',16.99),
(89,'Set de Cuchillos',45.00),
(90,'Tabla de Cortar',18.99),
(91,'Sartén Antiadherente',32.99),
(92,'Olla de Presión',69.99),
(93,'Juego de Ollas',89.99),
(94,'Plancha de Vapor',45.00),
(95,'Aspiradora Robot',249.99),
(96,'Aspiradora Vertical',159.99),
(97,'Escoba Eléctrica',79.99),
(98,'Mopa a Vapor',89.99),
(99,'Dispensador de Agua',119.99),
(100,'Mini Refrigerador',149.99);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_uca1400_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER trim_producto_insert
BEFORE INSERT ON productos
FOR EACH ROW
BEGIN
    SET NEW.nombre_producto = TRIM(NEW.nombre_producto);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_uca1400_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER trim_producto_update
BEFORE UPDATE ON productos
FOR EACH ROW
BEGIN
    SET NEW.nombre_producto = TRIM(NEW.nombre_producto);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id_venta` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL DEFAULT curdate(),
  `hora` time NOT NULL DEFAULT curtime(),
  PRIMARY KEY (`id_venta`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `ventas` VALUES
(1,'2025-10-22','19:48:25');
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_uca1400_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER force_autoincrement_venta
BEFORE INSERT ON ventas
FOR EACH ROW
BEGIN
    SET NEW.id_venta = NULL;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-10-22 19:54:23
