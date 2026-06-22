CREATE DATABASE  IF NOT EXISTS `task_manager` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `task_manager`;
-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: task_manager
-- ------------------------------------------------------
-- Server version	8.0.46

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
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `status` varchar(50) DEFAULT 'Pending',
  `priority` varchar(50) DEFAULT 'Medium',
  `due_date` date DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (3,'learn node.js ui','Build task manager backend','Pending','High','2026-07-03',1,'2026-06-19 13:38:50'),(7,'python','Build task manager backend','Pending','Low','2026-06-20',1,'2026-06-21 13:10:04'),(8,'dsfd','sdfds','Pending','Low','2026-06-10',1,'2026-06-21 18:57:20'),(9,'dsf','dffd','Pending','Low','2026-06-16',1,'2026-06-21 19:00:56'),(10,'dsds','sdfds','Pending','Low','2026-06-23',1,'2026-06-21 19:03:40'),(11,'sdsa','asfasf','Pending','Low','2026-06-25',NULL,'2026-06-21 19:04:42'),(12,'dfds','fsdf','Pending','Low','2026-06-12',NULL,'2026-06-21 19:05:49'),(17,'ram task','no task','Pending','Low','2026-06-22',6,'2026-06-22 15:53:03'),(18,'learn node.js','to build projects','In Progress','Medium','2026-07-03',3,'2026-06-22 16:00:34');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Saichha','saichha@gmail.com','$2b$10$AfFRw52rkC3Wa2XDEmkJyuv2ypnlusygap2f/HA5HZdba5nGKsc6S','2026-06-18 13:31:25'),(3,'Rahul','test@gmail.com','$2b$10$4tacxolqxPO6v0L2T45CKuxmI9ZR6xeTqxOsRnwj6GgB1tsogTZdK','2026-06-19 11:53:21'),(4,'samay','samay@gmail.com','$2b$10$gLDvpGNXu/3ciKds.RYGsOJRxBW16ZE1jc2TXIuHj8OlY6v8ohMj2','2026-06-21 18:18:38'),(5,'kalpana','testt@gmail.com','$2b$10$Tx0seu9BVSCyLfWo6TUdRua2RA2gUpr9.lxZvndZs5oiLZDMTrC46','2026-06-21 18:29:57'),(6,'RAM','ram@test.com','$2b$10$EYHX7iyXpPwihRRHLwq0/OMjSeVt8BEdRaeT/gwA5X1guJCoQchzi','2026-06-22 15:52:38');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-23  0:32:07
