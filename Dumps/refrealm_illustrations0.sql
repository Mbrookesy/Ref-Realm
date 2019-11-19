-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: refrealm
-- ------------------------------------------------------
-- Server version	5.7.28-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `illustrations`
--

DROP TABLE IF EXISTS `illustrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `illustrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artDetailId` int(11) DEFAULT NULL,
  `characterId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `artDetailId` (`artDetailId`),
  KEY `characterId` (`characterId`),
  CONSTRAINT `illustrations_ibfk_1` FOREIGN KEY (`artDetailId`) REFERENCES `art_details` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `illustrations_ibfk_2` FOREIGN KEY (`characterId`) REFERENCES `characters` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `illustrations`
--

LOCK TABLES `illustrations` WRITE;
/*!40000 ALTER TABLE `illustrations` DISABLE KEYS */;
INSERT INTO `illustrations` VALUES (1,1,3),(2,1,4),(3,2,5),(4,3,6),(5,3,7),(6,4,8),(7,5,19),(8,6,9),(9,7,10),(10,8,11),(11,9,2),(12,10,2),(13,11,2),(14,12,13),(15,13,12),(16,14,14),(17,15,15),(18,16,2),(19,17,2),(20,18,2),(21,19,16),(22,19,17),(23,19,18),(24,20,7),(25,60,29),(35,63,2),(36,64,30),(37,65,2),(38,66,2),(39,67,1),(40,68,1),(41,69,1),(42,70,1),(43,75,42),(47,78,43);
/*!40000 ALTER TABLE `illustrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-19 17:54:47
