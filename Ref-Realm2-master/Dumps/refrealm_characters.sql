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
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `hair_colour` varchar(255) DEFAULT NULL,
  `hair_style` varchar(255) DEFAULT NULL,
  `eye_colour` varchar(255) DEFAULT NULL,
  `body_type` varchar(255) DEFAULT NULL,
  `series` varchar(255) DEFAULT NULL,
  `clothing_style` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age_group` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (1,'NO_CHARACTER','null','null','null','null','null','null','null','null'),(2,'UNKNOWN_CHARACTER','null','null','null','null','null','null','null','null'),(3,'Brendan','Brown','Short','Grey','Average','Pokemon','Casual','Male','Teen'),(4,'May','Brown','Medium','Blue','Average','Pokemon','Casual','Female','Teen'),(5,'Rosa','Brown','Pigtails','Blue','Average','Pokemon','Casual','Female','Teen'),(6,'Jessie','Red','Misc','Blue','Average','Pokemon','Business_Casual','Female','Young_Adult'),(7,'James','Blue','Medium','Green','Average','Pokemon','Business_Casual','Male','Young_Adult'),(8,'Sakura_Oogami','White','Long','Blue','Muscular','Danganronpa','Business_Casual','Female','Teen'),(9,'Amami_Rantarou','Green','Short','Green','Average','Danganronpa','Casual','Male','Teen'),(10,'Shinguuji_Korekiyo','Black','Medium','Green','Average','Danganronpa','Smart_Casual','Male','Teen'),(11,'Princess_Peach','Blonde','Long','Blue','Average','Super_Mario','Formal','Female','Young_Adult'),(12,'Chelseigh','Blonde','Short','Blue','Average','Original','Smart_Casual','Female','Young_Adult'),(13,'Myriel','Pink','Long','Blue','Average','Original','Business_Casual','Female','Young_Adult'),(14,'Acadia','Grey','Short','Green','Muscular','Original','Casual','Female','Young_Adult'),(15,'Hua_Mulan','Black','Medium','Black','Average','Mulan','Business_Casual','Female','Young_Adult'),(16,'Link','Blonde','Medium','Blue','Average','Legend_Of_Zelda','Smart_Casual','Male','Young_Adult'),(17,'Ganondorf','Red','Short','Red','Muscular','Legend_Of_Zelda','Casual','Male','Adult'),(18,'Princess_Zelda','Brown','Long','Blue','Average','Legend_Of_Zelda','Formal','Female','Young_Adult'),(19,'Shuuichi','Black','Short','Yellow','Average','Danganronpa','Formal','Male','Teen'),(29,'Runa','Pink','Curles','Blue','Average','Original','Formal','Female','Teen'),(30,'Gabe_Newell','Grey','Short','Brown','Overweight','Real_Life','Smart_Business','Male','Middle_Aged');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-18 17:50:44
