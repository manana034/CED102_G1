-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021-04-07 17:09:47
-- 伺服器版本： 8.0.22
-- PHP 版本： 7.4.15




SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `ft`
--

-- --------------------------------------------------------

--
-- 資料表結構 `admin`
--

CREATE TABLE `admin` (
  `aNo` int NOT NULL,
  `aName` varchar(20) NOT NULL,
  `aId` varchar(10) NOT NULL,
  `aPsw` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `admin`
--

INSERT INTO `admin` (`aNo`, `aName`, `aId`, `aPsw`) VALUES
(1, 'adminA', 'adminAid', 'Apassword'),
(2, 'adminB', 'adminBid', 'Bpassword'),
(3, 'adminC', 'adminCid', 'Cpassword');

-- --------------------------------------------------------

--
-- 資料表結構 `chatbot`
--

CREATE TABLE `chatbot` (
  `keyNo` int NOT NULL,
  `keyType` tinyint(1) NOT NULL,
  `keyW` varchar(5) NOT NULL,
  `keyQ` varchar(50) NOT NULL,
  `keyA` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `dietrecord`
--

CREATE TABLE `dietrecord` (
  `dtRNo` int NOT NULL,
  `mNo` int NOT NULL,
  `dtCalTal` decimal(7,2) NOT NULL,
  `dtTime` date NOT NULL,
  `dtPd` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `dietrecord`
--

INSERT INTO `dietrecord` (`dtRNo`, `mNo`, `dtCalTal`, `dtTime`, `dtPd`) VALUES
(1, 1, '2370.00', '2021-02-04', 1),
(2, 1, '948.00', '2021-02-05', 2),
(3, 1, '270.00', '2021-02-06', 2),
(4, 1, '1015.00', '2021-02-06', 3),
(5, 1, '1585.00', '2021-02-07', 2),
(6, 2, '1650.00', '2021-02-07', 2),
(7, 2, '800.00', '2021-02-07', 3),
(8, 3, '3180.00', '2021-02-08', 3),
(9, 3, '3815.00', '2021-02-09', 1),
(10, 2, '1815.00', '2021-02-09', 2),
(11, 1, '1493.00', '2021-02-09', 3),
(12, 1, '3414.00', '2021-02-10', 1),
(13, 3, '3700.00', '2021-02-11', 1),
(14, 1, '1964.00', '2021-02-11', 3),
(15, 2, '1553.00', '2021-02-11', 3),
(16, 3, '3676.00', '2021-02-11', 3),
(17, 1, '394.00', '2021-02-13', 1),
(18, 1, '1270.00', '2021-02-13', 2),
(19, 3, '3150.00', '2021-02-13', 2),
(20, 1, '1404.00', '2021-02-14', 2),
(21, 1, '694.00', '2021-02-15', 2),
(22, 1, '850.00', '2021-02-15', 3),
(23, 4, '1270.00', '2021-02-15', 3),
(24, 2, '394.00', '2021-02-16', 1),
(25, 3, '2920.00', '2021-02-16', 2),
(26, 1, '971.00', '2021-02-16', 1),
(27, 1, '1144.00', '2021-02-17', 2),
(28, 3, '3150.00', '2021-02-17', 2),
(29, 2, '694.00', '2021-02-17', 3),
(30, 2, '720.00', '2021-02-18', 1),
(31, 3, '3180.00', '2021-02-18', 1),
(32, 1, '960.00', '2021-02-18', 1),
(33, 1, '894.00', '2021-02-19', 2),
(34, 1, '927.00', '2021-02-20', 3),
(35, 1, '1735.00', '2021-02-21', 3),
(36, 2, '550.00', '2021-02-22', 3),
(37, 3, '2920.00', '2021-02-22', 3),
(38, 1, '897.00', '2021-02-22', 1),
(39, 3, '3540.00', '2021-02-23', 2),
(40, 1, '1869.00', '2021-02-24', 3),
(41, 1, '701.00', '2021-02-25', 1),
(42, 3, '2340.00', '2021-02-25', 2),
(43, 3, '2340.00', '2021-02-26', 1),
(44, 1, '850.00', '2021-02-26', 3),
(45, 1, '615.00', '2021-02-27', 1),
(46, 2, '676.00', '2021-02-27', 2),
(47, 3, '3000.00', '2021-02-27', 2),
(48, 1, '480.00', '2021-02-28', 3),
(49, 4, '394.00', '2021-02-28', 3),
(50, 1, '650.00', '2021-03-01', 1),
(51, 1, '1375.00', '2021-03-03', 2),
(52, 2, '1100.00', '2021-03-04', 3),
(53, 2, '694.00', '2021-03-05', 1),
(54, 1, '635.00', '2021-03-05', 1),
(55, 3, '2920.00', '2021-03-05', 2),
(56, 3, '2920.00', '2021-03-06', 1),
(57, 1, '1664.00', '2021-03-06', 2),
(58, 1, '1234.00', '2021-03-07', 3),
(59, 1, '1404.00', '2021-03-09', 1),
(60, 1, '1585.00', '2021-03-10', 2),
(61, 2, '1234.00', '2021-03-10', 3),
(62, 2, '1388.00', '2021-03-11', 1),
(63, 2, '1100.00', '2021-03-12', 2),
(64, 1, '1270.00', '2021-03-13', 3),
(65, 1, '1471.00', '2021-03-15', 1),
(66, 4, '1650.00', '2021-03-15', 3),
(67, 1, '1297.00', '2021-03-17', 2),
(68, 3, '2667.00', '2021-03-18', 1),
(69, 3, '2606.00', '2021-03-19', 1),
(70, 1, '1585.00', '2021-03-19', 3),
(71, 1, '854.00', '2021-03-21', 1),
(72, 1, '970.00', '2021-03-24', 2),
(73, 3, '4545.00', '2021-03-25', 2),
(74, 3, '5602.50', '2021-03-25', 3),
(75, 1, '1489.00', '2021-03-26', 1),
(76, 2, '635.00', '2021-03-26', 2),
(77, 2, '1608.00', '2021-03-27', 2),
(78, 2, '511.00', '2021-03-29', 1),
(79, 1, '1085.00', '2021-03-28', 3),
(80, 4, '1162.00', '2021-03-30', 3),
(81, 1, '1028.00', '2021-04-01', 2),
(82, 1, '1555.00', '2021-04-02', 1),
(83, 1, '860.00', '2021-04-03', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `dtritem`
--

CREATE TABLE `dtritem` (
  `dtRNo` int NOT NULL,
  `fdNo` int NOT NULL,
  `fdQty` int NOT NULL,
  `dtItemCal` decimal(7,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `dtritem`
--

INSERT INTO `dtritem` (`dtRNo`, `fdNo`, `fdQty`, `dtItemCal`) VALUES
(1, 2, 2, '1100.00'),
(1, 30, 2, '1270.00'),
(2, 2, 1, '550.00'),
(2, 31, 1, '197.00'),
(2, 39, 3, '201.00'),
(3, 42, 1, '270.00'),
(4, 47, 5, '1015.00'),
(5, 30, 2, '1270.00'),
(5, 53, 3, '315.00'),
(6, 2, 3, '1650.00'),
(7, 76, 2, '800.00'),
(8, 38, 2, '2180.00'),
(8, 83, 4, '1000.00'),
(9, 38, 3, '3270.00'),
(9, 68, 1, '545.00'),
(10, 30, 2, '1270.00'),
(10, 68, 1, '545.00'),
(11, 53, 1, '105.00'),
(11, 81, 4, '1388.00'),
(12, 2, 2, '1100.00'),
(12, 38, 2, '2180.00'),
(12, 39, 2, '134.00'),
(13, 2, 2, '1100.00'),
(13, 32, 2, '1800.00'),
(13, 76, 2, '800.00'),
(14, 30, 2, '1270.00'),
(14, 81, 2, '694.00'),
(15, 42, 2, '540.00'),
(15, 45, 3, '468.00'),
(15, 68, 1, '545.00'),
(16, 47, 2, '406.00'),
(16, 51, 3, '3270.00'),
(17, 31, 2, '394.00'),
(18, 30, 2, '1270.00'),
(19, 42, 3, '810.00'),
(19, 70, 4, '2340.00'),
(20, 30, 2, '1270.00'),
(20, 39, 2, '134.00'),
(21, 81, 2, '694.00'),
(22, 45, 1, '156.00'),
(22, 81, 2, '694.00'),
(23, 30, 2, '1270.00'),
(24, 31, 2, '394.00'),
(25, 2, 3, '1650.00'),
(25, 30, 2, '1270.00'),
(26, 42, 1, '270.00'),
(26, 45, 1, '156.00'),
(26, 68, 1, '545.00'),
(27, 31, 2, '394.00'),
(27, 83, 3, '750.00'),
(28, 42, 3, '810.00'),
(28, 70, 4, '2340.00'),
(29, 81, 2, '694.00'),
(30, 35, 3, '510.00'),
(30, 53, 2, '210.00'),
(31, 30, 2, '1270.00'),
(31, 42, 3, '810.00'),
(31, 47, 2, '406.00'),
(31, 81, 2, '694.00'),
(32, 86, 2, '480.00'),
(32, 99, 6, '480.00'),
(33, 31, 2, '394.00'),
(33, 83, 2, '500.00'),
(34, 42, 3, '810.00'),
(34, 98, 1, '117.00'),
(35, 2, 2, '1100.00'),
(35, 30, 1, '635.00'),
(36, 51, 5, '550.00'),
(37, 2, 3, '1650.00'),
(37, 30, 2, '1270.00'),
(38, 47, 1, '203.00'),
(38, 81, 2, '694.00'),
(39, 42, 1, '270.00'),
(39, 51, 3, '3270.00'),
(40, 2, 2, '1100.00'),
(40, 30, 1, '635.00'),
(40, 39, 2, '134.00'),
(41, 45, 1, '156.00'),
(41, 68, 1, '545.00'),
(42, 70, 4, '2340.00'),
(43, 70, 4, '2340.00'),
(44, 45, 1, '156.00'),
(44, 81, 2, '694.00'),
(45, 35, 3, '510.00'),
(45, 53, 1, '105.00'),
(46, 42, 1, '270.00'),
(46, 47, 2, '406.00'),
(47, 2, 3, '1650.00'),
(47, 30, 2, '1270.00'),
(47, 99, 1, '80.00'),
(48, 86, 2, '480.00'),
(49, 31, 2, '394.00'),
(50, 39, 2, '134.00'),
(50, 47, 2, '406.00'),
(50, 51, 1, '110.00'),
(51, 30, 2, '1270.00'),
(51, 53, 1, '105.00'),
(52, 2, 2, '1100.00'),
(53, 81, 2, '694.00'),
(54, 30, 1, '635.00'),
(55, 2, 3, '1650.00'),
(55, 30, 2, '1270.00'),
(56, 2, 3, '1650.00'),
(56, 30, 2, '1270.00'),
(57, 30, 2, '1270.00'),
(57, 31, 2, '394.00'),
(58, 2, 2, '1100.00'),
(58, 39, 2, '134.00'),
(59, 30, 2, '1270.00'),
(59, 39, 2, '134.00'),
(60, 2, 1, '550.00'),
(60, 30, 1, '635.00'),
(60, 76, 1, '400.00'),
(61, 2, 2, '1100.00'),
(61, 39, 2, '134.00'),
(62, 81, 4, '1388.00'),
(63, 2, 2, '1100.00'),
(64, 30, 2, '1270.00'),
(65, 30, 2, '1270.00'),
(65, 39, 3, '201.00'),
(66, 2, 3, '1650.00'),
(67, 2, 2, '1100.00'),
(67, 31, 1, '197.00'),
(68, 2, 4, '2200.00'),
(68, 31, 1, '197.00'),
(68, 42, 1, '270.00'),
(69, 2, 4, '2200.00'),
(69, 47, 2, '406.00'),
(70, 30, 2, '1270.00'),
(70, 53, 3, '315.00'),
(71, 51, 2, '220.00'),
(71, 81, 4, '1388.00'),
(71, 118, 1, '100.00'),
(72, 53, 1, '105.00'),
(72, 81, 5, '1735.00'),
(72, 118, 1, '100.00'),
(73, 2, 3, '1650.00'),
(73, 30, 2, '1270.00'),
(73, 113, 1, '110.00'),
(74, 30, 3, '1905.00'),
(74, 84, 4, '1720.00'),
(74, 113, 1, '110.00'),
(75, 2, 2, '1100.00'),
(75, 3, 1, '440.00'),
(75, 4, 4, '1288.00'),
(75, 101, 1, '150.00'),
(76, 30, 1, '635.00'),
(77, 51, 2, '220.00'),
(77, 81, 4, '1388.00'),
(78, 47, 2, '406.00'),
(78, 53, 1, '105.00'),
(79, 17, 2, '1100.00'),
(79, 18, 2, '920.00'),
(79, 101, 1, '150.00'),
(80, 42, 1, '270.00'),
(80, 47, 4, '812.00'),
(80, 99, 1, '80.00'),
(81, 26, 1, '660.00'),
(81, 27, 2, '1306.00'),
(81, 117, 1, '90.00'),
(82, 38, 1, '1090.00'),
(82, 39, 5, '335.00'),
(82, 106, 1, '130.00'),
(83, 36, 2, '600.00'),
(83, 37, 1, '260.00');

-- --------------------------------------------------------

--
-- 資料表結構 `favoritea`
--

CREATE TABLE `favoritea` (
  `mNo` int NOT NULL,
  `infoNo` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `favoritea`
--

INSERT INTO `favoritea` (`mNo`, `infoNo`) VALUES
(1, 2),
(1, 6),
(1, 7),
(1, 10),
(1, 15),
(1, 16),
(1, 19),
(1, 20),
(2, 1),
(2, 4),
(2, 5),
(2, 15),
(2, 16),
(3, 5),
(3, 8),
(3, 16),
(4, 1),
(4, 9),
(4, 10),
(4, 16),
(4, 17);

-- --------------------------------------------------------

--
-- 資料表結構 `follow`
--

CREATE TABLE `follow` (
  `mNo` int NOT NULL,
  `mNoFollow` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `follow`
--

INSERT INTO `follow` (`mNo`, `mNoFollow`) VALUES
(2, 1),
(5, 1),
(6, 1),
(7, 1),
(10, 1),
(1, 2),
(5, 2),
(6, 2),
(7, 2),
(10, 2),
(8, 3),
(9, 3),
(1, 4),
(2, 4),
(5, 4),
(6, 4),
(7, 4),
(1, 5),
(2, 5),
(8, 5),
(9, 5),
(3, 6),
(5, 6),
(3, 7),
(5, 7),
(4, 8),
(5, 8),
(1, 9),
(1, 10);

-- --------------------------------------------------------

--
-- 資料表結構 `food`
--

CREATE TABLE `food` (
  `fdNo` int NOT NULL,
  `fdName` varchar(20) NOT NULL,
  `fdCalPer` int NOT NULL,
  `fdType` tinyint(1) NOT NULL DEFAULT '1',
  `mNo` int DEFAULT NULL,
  `calRate` decimal(2,1) NOT NULL DEFAULT '1.0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `food`
--

INSERT INTO `food` (`fdNo`, `fdName`, `fdCalPer`, `fdType`, `mNo`, `calRate`) VALUES
(1, '白米飯', 225, 2, NULL, '1.0'),
(2, '炒飯', 550, 2, NULL, '1.0'),
(3, '滷肉飯', 440, 2, NULL, '1.0'),
(4, '雞肉飯', 322, 2, NULL, '1.0'),
(5, '咖哩飯', 575, 2, NULL, '1.0'),
(6, '排骨飯', 925, 2, NULL, '1.0'),
(7, '石鍋拌飯', 470, 2, NULL, '1.0'),
(8, '筒仔米糕', 400, 2, NULL, '1.0'),
(9, '豆皮壽司', 170, 2, NULL, '1.0'),
(10, '花壽司', 145, 2, NULL, '1.0'),
(11, '皮蛋瘦肉粥', 338, 2, NULL, '1.0'),
(12, '御飯糰', 220, 2, NULL, '1.0'),
(13, '油飯', 448, 2, NULL, '1.0'),
(14, '三寶飯', 960, 2, NULL, '1.0'),
(15, '陽春乾麵', 425, 3, NULL, '1.0'),
(16, '陽春湯麵', 270, 3, NULL, '1.0'),
(17, '餛飩麵', 550, 3, NULL, '1.0'),
(18, '牛肉麵', 460, 3, NULL, '1.0'),
(19, '肉燥米粉', 254, 3, NULL, '1.0'),
(20, '冬粉', 200, 3, NULL, '1.0'),
(21, '板條', 295, 3, NULL, '1.0'),
(22, '油麵', 380, 3, NULL, '1.0'),
(23, '炸醬麵', 403, 3, NULL, '1.0'),
(24, '蚵仔麵線', 246, 3, NULL, '1.0'),
(25, '義大利肉醬麵', 330, 3, NULL, '1.0'),
(26, '海鮮烏龍麵', 660, 3, NULL, '1.0'),
(27, '涼麵', 653, 3, NULL, '1.0'),
(28, '鐵板麵加蛋', 570, 3, NULL, '1.0'),
(29, '水餃(10個)', 565, 4, NULL, '1.0'),
(30, '鍋貼(10個)', 635, 4, NULL, '1.0'),
(31, '肉圓', 197, 4, NULL, '1.0'),
(32, '炸豬排定食', 900, 4, NULL, '1.0'),
(33, '香腸', 170, 4, NULL, '1.0'),
(34, '牛肋條', 225, 4, NULL, '1.0'),
(35, '牛排', 170, 4, NULL, '1.0'),
(36, '炒牛肉片', 300, 4, NULL, '1.0'),
(37, '羊排', 260, 4, NULL, '1.0'),
(38, '香草烤半雞', 1090, 4, NULL, '1.0'),
(39, '烤雞肉串', 67, 4, NULL, '1.0'),
(40, '雞胸肉', 187, 4, NULL, '1.0'),
(41, '鮪魚蛋餅', 315, 4, NULL, '1.0'),
(42, '火腿蛋三明治', 270, 4, NULL, '1.0'),
(43, '凱薩沙拉', 62, 5, NULL, '1.0'),
(44, '洋芋沙拉', 136, 5, NULL, '1.0'),
(45, '鮮蛋沙拉', 156, 5, NULL, '1.0'),
(46, '燙青菜', 56, 5, NULL, '1.0'),
(47, '烤馬鈴薯', 203, 5, NULL, '1.0'),
(48, '烤蕃薯', 160, 5, NULL, '1.0'),
(49, '豆芽菜', 35, 5, NULL, '1.0'),
(50, '酪梨', 73, 5, NULL, '1.0'),
(51, '蘋果', 110, 5, NULL, '1.0'),
(52, '奇異果', 50, 5, NULL, '1.0'),
(53, '香蕉', 105, 5, NULL, '1.0'),
(54, '橘子', 50, 5, NULL, '1.0'),
(55, '芭樂', 70, 5, NULL, '1.0'),
(56, '櫻桃', 50, 5, NULL, '1.0'),
(57, '鳳梨', 50, 5, NULL, '1.0'),
(58, '芒果', 100, 5, NULL, '1.0'),
(59, '薯條(中)', 479, 6, NULL, '1.0'),
(60, '六塊麥克雞塊', 328, 6, NULL, '1.0'),
(61, '炸雞 (翅膀)', 181, 6, NULL, '1.0'),
(62, '炸雞 (上腿肉)', 278, 6, NULL, '1.0'),
(63, '炸雞 (雞胸肉)', 257, 6, NULL, '1.0'),
(64, '麥香雞', 350, 6, NULL, '1.0'),
(65, '麥香魚', 330, 6, NULL, '1.0'),
(66, '薯餅', 152, 6, NULL, '1.0'),
(67, '可樂餅', 176, 6, NULL, '1.0'),
(68, '雞排', 545, 6, NULL, '1.0'),
(69, '甜不辣', 300, 6, NULL, '1.0'),
(70, '鹹酥雞', 585, 6, NULL, '1.0'),
(71, '地瓜條', 296, 6, NULL, '1.0'),
(72, '臭豆腐', 565, 6, NULL, '1.0'),
(73, '冰淇淋', 284, 7, NULL, '1.0'),
(74, '芒果冰', 436, 7, NULL, '1.0'),
(75, '綜合燒仙草', 429, 7, NULL, '1.0'),
(76, '紅豆湯圓', 400, 7, NULL, '1.0'),
(77, '薑汁豆花', 300, 7, NULL, '1.0'),
(78, '原味蛋塔', 180, 7, NULL, '1.0'),
(79, '原味鬆餅', 262, 7, NULL, '1.0'),
(80, '布丁', 119, 7, NULL, '1.0'),
(81, '脆皮甜甜圈', 347, 7, NULL, '1.0'),
(82, '蘋果派', 251, 7, NULL, '1.0'),
(83, '香草泡芙', 250, 7, NULL, '1.0'),
(84, '重乳酪蛋糕', 430, 7, NULL, '1.0'),
(85, '波蘿麵包', 290, 7, NULL, '1.0'),
(86, '紅豆車輪餅', 240, 7, NULL, '1.0'),
(87, '牛奶', 150, 8, NULL, '1.0'),
(88, '豆漿', 73, 8, NULL, '1.0'),
(89, '優酪乳', 140, 8, NULL, '1.0'),
(90, '美式咖啡', 2, 8, NULL, '1.0'),
(91, '拿鐵', 135, 8, NULL, '1.0'),
(92, '可樂', 252, 8, NULL, '1.0'),
(93, '紅茶', 120, 8, NULL, '1.0'),
(94, '奶茶', 285, 8, NULL, '1.0'),
(95, '珍珠奶茶', 363, 8, NULL, '1.0'),
(96, '養樂多綠茶', 200, 8, NULL, '1.0'),
(97, '阿華田', 432, 8, NULL, '1.0'),
(98, '蘋果汁', 117, 8, NULL, '1.0'),
(99, '蔬果汁', 80, 8, NULL, '1.0'),
(100, '啤酒', 155, 8, NULL, '1.0'),
(101, 'ALMONDS BAR', 150, 1, NULL, '0.5'),
(102, 'BANANA BAR', 140, 1, NULL, '1.0'),
(103, 'STRABERRY BITES', 130, 1, NULL, '1.5'),
(104, 'COCO ALMONDS', 160, 1, NULL, '0.5'),
(105, 'ENERGY BALL', 100, 1, NULL, '1.0'),
(106, 'APPLE BAR', 130, 1, NULL, '1.0'),
(107, 'FRUIT BAR', 140, 1, NULL, '1.0'),
(108, 'PEANUT BAR', 200, 1, NULL, '0.5'),
(109, 'CHOCOLATE ORANGE BAR', 190, 1, NULL, '1.5'),
(110, 'CARAMEL BAR', 170, 1, NULL, '1.5'),
(111, 'FRUIT CEREAL', 120, 1, NULL, '0.5'),
(112, 'NUTTY CEREAL', 130, 1, NULL, '0.5'),
(113, 'STRABERRY CEREAL', 110, 1, NULL, '1.5'),
(114, 'BERRY CEREAL', 120, 1, NULL, '1.0'),
(115, 'COCONUT CEREAL', 140, 1, NULL, '1.0'),
(116, 'APRICOT CEREAL', 110, 1, NULL, '1.5'),
(117, 'VEGGIE CRACKERS', 90, 1, NULL, '0.5'),
(118, 'POTATO CRACKERS', 100, 1, NULL, '0.5'),
(119, 'BEETROOT CRACKERS', 110, 1, NULL, '1.0'),
(120, 'SEA SALT CRACKERS', 120, 1, NULL, '1.5'),
(121, '大胖特製馬卡龍', 200, 9, 1, '1.0'),
(122, 'Gin & Tonic', 100, 9, 1, '1.0'),
(123, '鄰居給的烤餅', 400, 9, 1, '1.0'),
(124, '50嵐冰淇淋紅茶(中)', 181, 9, 1, '1.0'),
(125, '火腿蛋吐司', 370, 9, 1, '1.0');

-- --------------------------------------------------------

--
-- 資料表結構 `information`
--

CREATE TABLE `information` (
  `infoNo` int NOT NULL,
  `infoType` tinyint(1) NOT NULL,
  `infoTitle` varchar(50) NOT NULL,
  `infoPhoto1` varchar(255) NOT NULL,
  `infoPhoto2` varchar(255) NOT NULL,
  `infoPhoto3` varchar(255) NOT NULL,
  `infoContent1` varchar(800) NOT NULL,
  `infoContent2` varchar(500) NOT NULL,
  `infoContent3` varchar(500) NOT NULL,
  `infoState` tinyint(1) NOT NULL DEFAULT '1',
  `mFoled` int NOT NULL DEFAULT '0',
  `infoTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `information`
--

INSERT INTO `information` (`infoNo`, `infoType`, `infoTitle`, `infoPhoto1`, `infoPhoto2`, `infoPhoto3`, `infoContent1`, `infoContent2`, `infoContent3`, `infoState`, `mFoled`, `infoTime`) VALUES
(1, 1, 'What’s for dinner?', './infoImg/info1_1.jpg', './infoImg/info2_1.jpg', './infoImg/info3_1.jpg', 'Even if you enjoy cooking, chances are you find yourself wondering what to make for dinner once in a while — especially if you\'re trying to eat more healthfully. And maybe you or someone in your household avoids all animal products or follows a low-carb eating style. Perhaps you need an easy meal for a quick weeknight supper or something a little fancier for a special occasion.<br>The two main guidelines: include plenty of plant-based foods (especially fruits and vegetables), and choose mostly unprocessed or minimally processed foods. Below, five cardiologists who treat patients at Harvard-affiliated hospitals share their favorite meals, along with some of the inspiration for their choices.', '\"We often pan-sear salmon with olive oil, salt, and pepper and serve it with couscous and an arugula salad tossed with olive oil, Parmesan cheese shavings, and fresh lemon juice. But my all-time favorite is cioppino, a seafood stew with a base made with olive oil, onion, garlic, fresh fennel, parsley, crushed tomatoes, white wine, and seafood stock. We add whatever is fresh at the fish market, but our version often includes clams, mussels, calamari, and a white fish such as cod or halibut.\"', '\"We always keep a lot of cut fresh fruits and vegetables on hand for easy and healthy snacking. In the summer, we love to grill lean steak or chicken breasts with a simple marinade of olive oil, ginger, and garlic, accompanied by a grilled or steamed green vegetable such as brussels sprouts, asparagus, or broccoli. Another favorite side dish is thinly sliced sweet potatoes prepared with a little olive oil, salt, and rosemary, either grilled or baked in the oven.\"', 1, 0, '2021-04-05 21:21:00'),
(2, 1, 'Can a Cookie Be Considered a Performance Food?', './infoImg/info1_2.mp4', './infoImg/info2_2.jpg', './infoImg/info3_2.jpg', 'Before you start baking cookies ‘for your health,’ it is important to know whether that cookie recipe is actually healthy or not.<br>When reviewing a recipe, go straight to the ingredient list. If the only modification is subbing cane sugar for coconut sugar, news flash: It’s still sugar, and nothing about the nutrition has changed. Read through the ingredients for meaningful swaps or additions from whole-grain flour varieties such as buckwheat or spelt, fibrous ingredients like chia, oats or flax, nutrient-rich dried or fresh fruits, vegetables and nuts, and other potential health-boosting ingredients such as turmeric, tahini, spirulina, etc. Adding more of these nutrient-rich ingredients helps boost the healthfulness of the cookie.', 'For a pre-workout cookie, add energy-boosting carbohydrates, which is your body’s preferred energy source for intense activity, with honey, banana or oats. To use the cookie as a grab ’n’ go meal or substantial snack, add protein powder and fibrous whole vegetables to help fill you up. Increasing the fat content with coconut oil or nut butter can also help increase satiety and promote energy for lower-intensity endurance training since your body uses more fat as energy for this type of workout.', 'But ‘healthy’ is a very vague and largely meaningless word because what is healthy for one person’s body and goals could be extremely different from what is healthy for the recipe developer’s (or influencer’s or whomever’s) body and goals. Bottom line: Understand your individual needs and define the results you’d like food intake to help promote because food is only healthy if it promotes general health, mental well-being or performance.', 1, 0, '2021-04-05 21:21:00'),
(3, 1, 'Fiber Could Be a Feel-Good Secret Weapon', './infoImg/info1_3.jpg', './infoImg/info2_3.jpg', './infoImg/info3_3.jpg', 'Fiber is essential for promoting satiety and blood sugar regulation, aiding digestion and supporting weight loss. The recommended daily intake of fiber is 25 grams for women and 35 grams for men. This equates to roughly 1/2 cup (75g) of high-fiber cereal, 1/2 cup (120g) beans, a pear, and 1/2 cup (100g) mixed veggies per day.<br>Researchers analyzed the dietary habits of more than 5,800 women and found premenopausal women who consumed more fiber were less likely to be depressed than women who consumed lower levels of fiber. The study also showed every 1 gram increase of fiber intake per 1,000 calories was associated with a 5% decrease in the prevalence of depression.', 'The researchers didn’t find a connection between fiber intake and depression risk in postmenopausal women, and hormone levels may have been a factor. “Previous studies indicate there might be interaction between estrogen and gut microbiota,” Kim says. “Because post-menopausal women experience estrogen depletion, the decreased interaction between estrogen and the gut microbiota may be related to the insignificant association between dietary fiber intake and depression in post-menopausal women.”', 'Researchers advise people follow the daily fiber recommendations. To add more fiber to your diet, choose whole grains over refined grains whenever possible. Eat fruits and vegetables with every meal. Reach for nuts and seeds at snack time instead of processed snacks and add plant-based protein sources like beans and chickpeas to your menu. Increase your fiber intake slowly, and be sure to hydrate, so you minimize the risk of bloating and GI issues.', 1, 0, '2021-04-05 21:21:00'),
(4, 1, 'Everything You Need to Know About Citrus', './infoImg/info1_4.jpg', './infoImg/info2_4.jpg', './infoImg/info3_4.jpg', 'Citrus fruits like oranges, lemons and limes are well-known for being a great source of vitamin C, an immune system-supporter that might even help shorten the duration of a cold. But that’s not all they can do for you. Because they’re packed with phytonutrients — powerful, plant-based antioxidants — citrus fruits also come with many other health benefits.A diet rich in citrus could help lower your risk of certain types of cancer and improve your cardiovascular health, potentially protecting against heart disease.<br>Learn more about the nutritional benefits of the most popular citrus fruits, plus how to store and enjoy them.', 'Citrus fruits are an excellent source of vitamin C, a nutrient that strengthens the immune system and keeps your skin smooth and elastic.Just one medium orange has all the vitamin C you need in a day.Citrus fruits have good amounts of other vitamins and minerals that your body needs to function properly, including B vitamins, potassium, magnesium and copper.Additionally, they are rich in plant compounds that have various health benefits, including anti-inflammatory and antioxidant effects.', 'Citrus fruits are a good source of fiber. Just one cup of orange segments contains four grams of fiber.To put that in perspective, it’s recommended that you consume 14 grams of fiber for every 1,000 calories you eat. It’s estimated that only 4% of men and 13% of women get that amount.Fiber has several health benefits, including improving digestive health and aiding weight loss.Oranges are particularly high in soluble fiber, the kind of fiber that helps lower cholesterol levels.', 1, 0, '2021-04-05 21:21:00'),
(5, 1, 'The best anti-inflammatory diets', './infoImg/info1_5.jpg', './infoImg/info2_5.jpg', './infoImg/info3_5.jpg', 'When it comes to fighting inflammation with diet, following a specific program is not a necessity. In fact, many of the so-called anti-inflammatory diets are more hype than real science. That said, a couple of diets round up all the anti-inflammatory elements into one eating plan and have more evidence of benefit than other diets. If you aren\'t sure where to start, these diets are good choices.<br>People who live in countries ringing the Mediterranean Sea have traditionally eaten a diet consisting mainly of fruits and vegetables, nuts and seeds, whole grains, fish, and olive oil — the same foods that experts recommend to bring down inflammation. People who followed this style of eating had lower rates of disease and lived longer than people who ate a Western-style diet.', 'DASH stands for Dietary Approaches to Stop Hypertension. It was originally developed to lower blood pressure without medication, but is now widely considered to be one of the healthiest eating patterns around. It includes foods low in total fat, saturated fat, and cholesterol, and lots of fruits, vegetables, and whole grains. Protein is supplied by low-fat dairy, fish, poultry, and nuts. Red meat, sweets, and sugary drinks are limited.', 'Another anti-inflammatory diet with science to back it up comes from Harvard-educated integrative medicine practitioner Dr. Andrew Weil. He started talking up anti-inflammatory measures decades ago, long before the idea began trending. His anti-inflammatory diet could be described as a Mediterranean diet with Asian influences. About 40% to 50% of calories come from carbohydrates, 30% from fat, and 20% to 30% from protein.', 1, 0, '2021-04-05 21:21:00'),
(6, 1, 'Tips From Dietitians For Better Meal Prep', './infoImg/info1_6.mp4', './infoImg/info2_6.jpg', './infoImg/info3_6.jpg', 'If you’re already an experienced meal prepper, you know putting the time in upfront saves even more time and headache later in the week, not to mention makes weight-loss even easier. If you’re just starting out on your meal planning journey, you’re probably doing so because you hope it’ll make your life a little easier.<br>Meal prep doesn’t have to be complicated — in fact, it’s easy to customize depending on your budget, lifestyle and dietary preferences. At its most basic level, you could just cook a protein, a grain and a vegetable in bulk and eat the same meal on repeat for a week. Or, you could learn easy ways to level-up your ingredients, your process and your meals — it’s possible to make food tastier and more interesting without a whole lot of extra effort.', 'To help you do so, we asked registered dietitians to share their best meal prep tips.<br>“Bulk cook a whole grain at the beginning of the week like quinoa, farro, barley or wheat berries. Then, you can add 1/2 cup to salads at lunch to boost fiber, keeping you full longer and preventing afternoon crashes and carb cravings. You can also reheat and add [the grains] to dinner, mix into a soup or make a grain bowl.”', '“I love to saute a big batch of veggies like onions and green peppers. Instead of cooking them in oil or butter, I use low-sodium vegetable broth. This adds a ton of taste without many calories at all. I save the oil in my meal for cooking my protein or to use as a salad dressing.”<br>“I combine a cup old-fashioned rolled oats with 1 tablespoon almond slivers and 1 tablespoon raisins or chopped dried cherries. You can make single-serve packs ahead of time and store each one in a reusable bag.”', 1, 0, '2021-04-05 21:21:00'),
(7, 1, 'Greek yogurt can curb Sugar Cravings', './infoImg/info1_7.mp4', './infoImg/info2_7.jpg', './infoImg/info3_7.jpg', 'Today’s food landscape is rife with quick, cheap access to sugar whenever we are craving it — and even when we aren’t. What’s more, sugar can be hidden under many names in unsuspecting foods ranging from condiments to frozen fruits.<br>Even after a satisfying meal, sugar cravings can hit you hard. This could be due to factors such as dehydration or lack of sleep. Another explanation is hedonic hunger — or eating for pleasure rather than for satisfaction. Researchers are still trying to figure out why this happens, but before we take the first bite, the sight of a sugary or fatty food causes the brain’s reward circuit to get excited.', 'Once the sweet treat hits your tastebuds, signals are fired off to the brain to release dopamine, a neurotransmitter that causes an intense feeling of pleasure. Overeating sugary foods not only floods the brain with dopamine but also creates a pattern of sugar cravings. In a short time, the brain starts to crave more sugar to reach the same threshold of pleasure it once got from small amounts of these feel-good foods.', 'Another cause of your sugar cravings could be an imbalanced gut microbiome, where the bacteria have adapted to thrive on sugar. To reset your gut’s natural balance of bacteria, choose low-sugar Greek yogurt and kefir that are packed with active probiotics. Greek yogurt is also rich in protein, keeping you fueled until your next meal. Add them to parfaits, smoothies, or use Greek yogurt in baked goods or as a substitute for mayo or sour cream.', 1, 0, '2021-04-05 21:21:00'),
(8, 2, 'Tai chi: Promising for COPD', './infoImg/info1_8.jpg', './infoImg/info2_8.jpg', './infoImg/info3_8.jpg', 'Tai chi — a gentle, flowing form of exercise practiced widely in China — has gained popularity in the United States in recent years, spurred in part by growing evidence for its health benefits. Tai chi may benefit people with a wide range of medical conditions, including COPD.<br>Tai chi combines sequences of slow, flowing upper- and lower-body movements with breath awareness and a variety of thinking skills that include focused attention and imagery. While classic tai chi is done standing, a modified version can be done sitting, so it\'s highly adaptable and therefore ideal for people with different fitness levels. All of the arm movements, and to some extent the leg movements, can be practiced while sitting in a sturdy chair.', 'Studies suggest that tai chi can help people with COPD boost their ability to walk and do other types of exercise, as well as improve their quality of life. The benefits are thought to arise from the combination of movement, breathing, and relaxation.<br>The movements safely and gradually strengthen the heart and major muscle groups. The deep breathing exercises enhance oxygen uptake, which can ease breathlessness. Finally, the meditative aspect of the practice helps lower stress.', 'You can likely find a tai chi class at a senior or community center, health club, or hospital. Classes are available at many of the 70-plus academic health centers throughout the United States that have integrative health programs. And many assisted living facilities offer tai chi classes free for their residents.<br>Wear loose, comfortable clothing and supportive shoes like sneakers. Or, you can go barefoot, if you prefer.', 1, 0, '2021-04-05 21:21:00'),
(9, 2, 'Yoga – Benefits Beyond the Mat', './infoImg/info1_9.mp4', './infoImg/info2_9.jpg', './infoImg/info3_9.jpg', 'Yoga develops inner awareness. It focuses your attention on your body\'s abilities at the present moment. It helps develop breath and strength of mind and body. It\'s not about physical appearance.<br>Yoga studios typically don\'t have mirrors. This is so people can focus their awareness inward rather than how a pose — or the people around them — looks. Surveys have found that those who practiced yoga were more aware of their bodies than people who didn\'t practice yoga. They were also more satisfied with and less critical of their bodies. For these reasons, yoga has become an integral part in the treatment of eating disorders and programs that promote positive body image and self-esteem.', 'Yoga, an ancient practice and meditation, has become increasingly popular in today\'s busy society. For many people, yoga provides a retreat from their chaotic and busy lives. This is true whether you\'re practicing downward facing dog posture on a mat in your bedroom, in an ashram in India or even in New York City\'s Times Square. Yoga provides many other mental and physical benefits. Some of these extend to the kitchen table.', 'There are many types of yoga. Hatha (a combination of many styles) is one of the most popular styles. It is a more physical type of yoga rather than a still, meditative form. Hatha yoga focuses on pranayamas. These are followed by a series of asanas (yoga postures), which end with savasana.<br>The goal during yoga practice is to challenge yourself physically, but not to feel overwhelmed. At this \"edge,\" the focus is on your breath while your mind is accepting and calm.', 1, 0, '2021-04-05 21:21:00'),
(10, 2, 'How to Jump Start Weight Loss With a Run Program', './infoImg/info1_10.mp4', './infoImg/info2_10.jpg', './infoImg/info3_10.jpg', '“We must learn to walk before we can run.” It’s a famous phrase that highlights the importance of mastering a more basic skill before moving on to the next level. While these sentiments are often correct, many coaches take issue when it comes to literally walking and running. It’s not always necessary to avoid light jogging when you’re starting a new workout regimen; in fact, a combination of a run/walk program can be the ticket to increased health and fitness.<br>Recent research also supports the act of combining running and walking. One study shows a combination of walking and running reduced fatigue and muscle pain compared to running alone. This is yet another factor to help you adhere to your workout plan.', 'The key to implementing a run/walk program is to exercise restraint. While we are often highly motivated as we start a new workout program, doing too much too soon is a recipe for burnout.<br>Voiles generally starts her clients off the first week alternating between 30 seconds of walking and 1–2 minutes of running for 1 mile. If that feels like too much, try the reverse formula, walking for 1–2 minutes and running for 30 seconds. You couldn’t easily chat with someone running next to you.', 'You will increase the amount of running you’re doing and the total distance itself, as well as add running intervals on your walk-only days. This will eventually have you doing a run five days a week. However, and that listening to your body is key to your success with this type of workout plan.If at any time it feels hard, you should drop back and repeat the prior week — you can repeat any week as many times as necessary until it stops feeling hard.', 1, 0, '2021-04-05 21:21:00'),
(11, 2, '3-Day Total-Body Strength Workout', './infoImg/info1_11.mp4', './infoImg/info2_11.jpg', './infoImg/info3_11.jpg', 'Long weekends tend to evoke images of vacations and quick getaways, but they can also be just what you need to jump-start a strength-training streak. Of course, you don’t need an official long weekend to do this workout. Just pick three consecutive days — you can even start on a Tuesday. You’re in control!The goal for this 3-day workout is strength, thus you are aiming for heavy weight, and longer rest breaks. Every exercise is completed 10 times and 3 sets, separated by a minimum a 1-minute rest break. It’s best to take at least a day between heavy resistance-training workouts to allow your muscles time to recover, heal and develop. However, if you focus on different areas of the body for your back-to-back lifting sessions, you can easily become a weekend-warrior for strength training.', 'The only tools necessary are dumbbells or other heavy objects you can hold onto safely. Begin with a minimum of 5 minutes of cardiovascular and mobility warmups before completing each workout.Begin by holding a dumbbell in the opposite hand of the planted foot. Keep a neutral spine and only a slight bend in the planted leg as you hinge forward, keeping square with the ground. Once the end range of a flat torso is reached, lower that leg back to the ground.', 'Select a box. Grasp a fairly heavy dumbbell in each hand and let your arms hang straight by your sides. Plant your right foot flat and firm on the box with toes pointing directly forward. Squeezing from the glutes on the right side, keep the right knee tracking directly over the middle toes, and press to a stand. Balance on top of the step for a moment, then slowly return to the starting position. After the prescribed number of reps, repeat on the other side.', 1, 0, '2021-04-05 21:21:00'),
(12, 2, '4 Cardio Workouts You Can Do in 30 Minutes or Less', './infoImg/info1_12.jpg', './infoImg/info2_12.jpg', './infoImg/info3_12.jpg', 'Even the most dedicated athletes can struggle to fit in a scheduled daily workout. While your initial inclination might be to skip a day and do your best to get back on track tomorrow, the truth is, there are alternative options to explore to still get in that quality workout.<br>From hopping on the bike at the gym to dance workouts and run/walk circuit training, we asked four coaches across various disciplines for their favorite workouts that can happen in 30 minutes or less.<br>Jeff Gaudette, head coach of Runner’s Connect: “My favorite 30-minute workout is a run or walk with a strength circuit. This workout combines both aerobic and strength work in a short period of time, which gives you the best of both worlds.', 'Complexes involve sequential exercises that are performed consecutively back-to-back with no rest between each exercise. You should aim to use the same weight the entire way through and make sure you don’t put your equipment down until the entire sequence is completed.<br>In cycling terms, the ‘sweet spot’ is 88–94% of your FTP. Because it allows for the optimal balance of intensity and volume, enabling you to achieve increased aerobic development without the fatigue of more difficult sessions.', 'It’s important to find a workout that is fun and effective. Those two things encourage me to find the time it takes to do a 30-minute workout. The workout challenges your speed, agility and your reaction time, firing your calves, quadriceps, hamstrings, glutes and core. The combination of the dynamic dance movements paired with the power and energy needed to perform the inspired plyometric movements offer a good balance of athleticism and fun!', 1, 0, '2021-04-05 21:21:00'),
(13, 2, 'Why You Need to Stretch After a Walk', './infoImg/info1_13.mp4', './infoImg/info2_13.jpg', './infoImg/info3_13.jpg', 'Taking a few minutes to focus on foot, ankle and hip mobility can have major benefits. Not only are you helping speed up recovery and reducing the risk of injury as you progress your walks and add more variable terrain and elevation, but you also benefit from simply spending a few extra minutes doing some dynamic stretching that can double as a form of bodyweight strength training for some movements.Physiotherapist and avid runner Jenn Tadashore says that for most people, walking is the one break from sitting that they get all day, and because of this, tight hips and even poor ankle mobility can be problematic. Taking time to give your hips some love can be critical to overall health and comfort, and the same even applies to the upper body.', 'Getting used to doing a few minutes of stretching after a walk is a great way to ensure that you’re actually getting some stretching in throughout the day. This is super important if you spend most of the day sitting and looking down at your laptop or your smartphone or looking up at the television. Even using this time to stretch out your upper body can set you up for a better day. If we’re working on mobility regularly, that helps us to have as full a range of motion as possible.', 'You can also make sure that you’re stretching throughout the rest of your workday, If you sit for work, set an alarm so that every half an hour, you’re reminded to stand up, do whatever stretch feels good, maybe walk to get a glass of water, then sit back down. Change the load that you’re putting on your body: We aren’t made to sit for long periods of time. If you can change it up so that you’ve got a sit desk, that’s great, but just moving more throughout the day will make a huge difference.', 1, 0, '2021-04-05 21:21:00'),
(14, 2, '8 Kettlebell Exercises For Everyone', './infoImg/info1_14.jpg', './infoImg/info2_14.jpg', './infoImg/info3_14.jpg', 'It’s no surprise kettlebell training is on the rise. There’s a good reason: Everyone can benefit from kettlebell exercises. “The kettlebell is an extremely versatile piece of exercise equipment that can be used for Olympic-style training, strength training, HIIT and mobility,” says Colin Laughlin, a certified strength and conditioning coach.<br>Kettlebells have a unique shape that lets you blast your body in ways dumbbells can’t. You can pull, push, twist and swing them to get leaner, stronger and more powerful. Plus, they’re easier on your wrists than dumbbells. Also, because of their offset weight, the gravitational pull goes straight down, instead of from side-to-side with a dumbbell (which is shaped like a teeter-totter).', 'Plus, kettlebells are incredibly convenient. “One kettlebell can, in some ways, replace an entire gym if you are creative enough,” says Grayson Wickham, DPT, a physical therapist and founder of Movement Vault. “When you add a few different kettlebell weight options into the mix, your workout capabilities are endless. During this quarantine time in New York City, my apartment gym has consisted mostly of my five different-weighted kettlebells.”', '1.KETTLEBELL DEADLIFT<br>2.KETTLEBELL GOBLET SQUAT<br>3.KETTLEBELL SWING<br>4.KETTLEBELL GOBLET STEPUPS<br>5.KETTLEBELL CURTSY LUNGE<br>6.KETTLEBELL PUSH-PRESS<br>7.KETTLEBELL SINGLE-ARM BOTTOMS-UP PRESS<br>8.SPLIT-STANCE KETTLEBELL ROW', 1, 0, '2021-04-05 21:21:00'),
(15, 3, '4 essential nutrients,are you getting enough?', './infoImg/info1_15.jpg', './infoImg/info2_15.jpg', './infoImg/info3_15.jpg', 'Over time, a shortfall of these nutrients may affect different aspects of your health, from teeth and bones to your heart, gut, muscles, blood pressure, weight, and more.<br>What is a nutritional shortfall?<br>Nutritional advice can be confusing. Eat more of this, less of that. Make sure you get enough — but not too much. It’s no wonder many people have so-called nutritional shortfalls, where their diet lacks sufficient essential nutrients.<br>According to the guidelines, these four are “considered dietary components of public health concern for the general US population.” That’s government talk for: these nutrients help you stay healthy, and you probably should eat more of them.<br>Four nutrients you need — and where to find them.', 'Calcium<br>How much: women: 1,000 to 1,200 milligrams (mg); men: 1,000 mg<br>8 ounces of plain, nonfat yogurt: 488 mg; 1 cup low-fat or soy milk: 301 to 305 mg; 1 cup cooked spinach: 245 mg; 1/2 cup tofu: 434 mg.<br><br>Potassium<br>How much: women: 2,600 mg; men: 3,400 mg<br>1 cup cooked lima beans: 969 mg; 1 medium baked potato with skin: 926 mg; 1 cup cooked acorn squash: 896 mg; 1 medium banana: 451 mg; 3 ounces skipjack tuna: 444 mg.', 'Dietary fiber<br>How much? women 22 to 28 grams (g); men: 28 to 34 g<br>1 cup shredded wheat cereal: 6.2 g; 3 cups popcorn: 5.8 g; 1/2 cup navy or white cooked beans: 9.3 to 9.6 g; 1 cup berries (raspberries, blackberries, blueberries): 6.2 g to 8 g.<br><br>Vitamin D<br>women and men 70 or younger: 600 international units (IU); women and men 71 and older: 800 IU', 1, 0, '2021-04-05 21:21:00'),
(16, 3, 'Why Calorie Counting Is a Complex Formula', './infoImg/info1_16.jpg', './infoImg/info2_16.jpg', './infoImg/info3_16.jpg', 'Consuming foods that supply calories is essential for supplying the body with energy to perform the basic functions of life such as keeping a heart beating and everything up to and including running a marathon. After all, a calorie is a unit of energy. Staying accountable, and having a record of changes being made.<br>However, calories in versus calories out is a complex equation and should be used as a guideline along with other metrics to assess the quality of eating habits and especially as a tool for weight change.<br>1.YOU CAN’T ACCOUNT FOR EVERY SINGLE CALORIE<br>The less processed food on your plate, the more energy you will output to digest it and the fewer calories that will be absorbed from that food.', '2. FOOD AND EXERCISE OFFER MORE THAN A CALORIC VALUE<br>This matters for long-term weight loss as workouts that stimulate more internal adaptations, regardless of calorie burn, create a generally stronger and more metabolically active body over time. When choosing foods to eat and workouts to do, aim to think of the long-term implications on overall health over the immediate caloric value.', '3. LABELS CAN BE MISLEADING<br>While research shows the majority of labels on packaged snack food is 90% accurate, some items fall surprisingly outside that range. Report found a popular diet ice cream to have 46% more calories than reported on the label, while another similar variety had 16% more calories than reported. One of those is FDA legal, one is not, but both lead to frustration of stalled weight progress by contributing more calories than you are counting.', 1, 0, '2021-04-05 21:21:00'),
(17, 3, 'Staying Healthy', './infoImg/info1_17.jpg', './infoImg/info2_17.jpg', './infoImg/info3_17.jpg', 'Maintaining good health doesn\'t happen by accident. It requires work, smart lifestyle choices, and the occasional checkup and test.A healthy diet is rich in fiber, whole grains, fresh fruits and vegetables, \"good\" or unsaturated fats, and omega-3 fatty acids. These dietary components turn down inflammation, which can damage tissue, joints, artery walls, and organs. Going easy on processed foods is another element of healthy eating. Sweets, foods made with highly refined grains, and sugar-sweetened beverages can cause spikes in blood sugar that can lead to early hunger. High blood sugar is linked to the development of diabetes, obesity, heart disease, and even dementia.', 'The Mediterranean diet meets all of the criteria for good health, and there is convincing evidence that it is effective at warding off heart attack, stroke, and premature death. The diet is rich in olive oil, fruits, vegetables, nuts and fish; low in red meats or processed meats; and includes a moderate amount of cheese and wine.<br>Physical activity is also necessary for good health. It can greatly reduce your risk of heart disease, stroke, breast and colon cancer, depression, and falls.', 'Finding ways to reduce stress is another strategy that can help you stay healthy, given the connection between stress and a variety of disorders. There are many ways to bust stress. Try, meditation, mindfulness, yoga, playing on weekends, and taking vacations.<br>If something happens to your health, a physician you know —and who knows you — is in the best position to help. He or she will also recommend tests to check for hidden cancer or other conditions.', 1, 0, '2021-04-05 21:21:00'),
(18, 3, '3 simple ways to get more restful slee', './infoImg/info1_18.jpg', './infoImg/info2_18.jpg', './infoImg/info3_18.jpg', 'The following three simple steps can help you sleep better.<br>1. Cut down on caffeine<br>Caffeine drinkers may find it harder to fall asleep than people who don\'t drink caffeine. Once they drift off, their sleep is shorter and lighter. For some, a single cup of coffee in the morning means a sleepless night. That may be because caffeine blocks the effects of adenosine, a neurotransmitter thought to promote sleep. Caffeine can also interrupt sleep by increasing the need to urinate during the night.<br>People who suffer from insomnia should avoid caffeine as much as possible, since its effects can endure for many hours.Those who can\'t or don\'t want to give up caffeine should avoid it after 2 p.m., or noon if they are especially caffeine-sensitive.', '2. Stop smoking or chewing tobacco<br>Nicotine is a central nervous system stimulant that can cause insomnia.People who kick the habit fall asleep more quickly and wake less often during the night. Sleep disturbance and daytime fatigue may occur during the initial withdrawal from nicotine, but even during this period, many former users report improvements in sleep. If you continue to use tobacco, avoid smoking or chewing it for at least one to two hours before bedtime.', '3. Limit alcohol intake<br>Alcohol depresses the nervous system, so a nightcap may seem to help some people fall asleep. Alcohol may be responsible for up to 10% of chronic insomnia cases. Also, alcohol can worsen snoring and other sleep breathing problems, sometimes to a dangerous extent. Even one drink can make a sleep-deprived person drowsy. In an automobile, the combination significantly increases a person\'s chance of having an accident.', 1, 0, '2021-04-05 21:21:00'),
(19, 3, 'More older adults are not aware of hypertension', './infoImg/info1_19.mp4', './infoImg/info2_19.jpg', './infoImg/info3_19.jpg', 'Study findings published online Sept. 9, 2020, by JAMA found that people\'s awareness and control of their high blood pressure have both dropped in recent years, especially among older adults.<br>The study pulled data from the National Health and Nutrition Examination Survey. It found that the number of people who knew they had hypertension fell 8% from 2013 to 2018. Among those who were aware of their condition, more than half did not manage it adequately. In particular, adults ages 60 and older were less likely to control their high blood pressure than younger people. Lack of engagement could be a factor. Researchers noted that among people who hadn\'t been to their doctor in the past year, fewer than 10% had controlled their blood pressure.', 'Some of the study was done using the older definition of high blood pressure — a systolic blood pressure (top number) of 140 or higher or a diastolic blood pressure (bottom number) of 90 or higher. New guidelines released in 2017 recommend people with hypertension should control their blood pressure to less than 130/80. This suggests that today even more adults may not realize they have high blood pressure.', 'Many people don\'t even know they have it, because high blood pressure has no symptoms or warning signs. But when elevated blood pressure is accompanied by abnormal cholesterol and blood sugar levels, the damage to your arteries, kidneys, and heart accelerates exponentially. High blood pressure is easy to detect and treat. Sometimes people can keep blood pressure in a healthy range simply by making lifestyle changes, such as losing weight, increasing activity, and eating more healthfully.', 1, 0, '2021-04-05 21:21:00'),
(20, 3, 'Essential Guide to Micronutrients', './infoImg/info1_20.mp4', './infoImg/info2_20.jpg', './infoImg/info3_20.jpg', 'We hear plenty about carbs, fat and protein. Every popular diet has its own philosophy on the right breakdown. Micronutrients, on the other hand, often get overlooked. Sure, they’re needed in much smaller quantities, but that doesn’t mean they’re not important. In fact, many physiological processes depend on micronutrients, and they have a dramatic impact on health and well-being.<br>For example, vitamin C is involved in collagen synthesis, and when we don’t consume enough of it, our gums, joints and skin become weaker (aka scurvy). Similarly, sodium and potassium regulate blood pressure and keep our heart beating at a consistent clip. Even small adjustments to blood levels of these minerals can be harmful.', '‘Micronutrients’ is a broad term used to describe vitamins and minerals. They are needed in much smaller quantities than macronutrients (protein, fat and carbohydrate), but support a variety of physiological functions. Some micronutrients, like vitamin D, can be synthesized by our bodies under the right conditions. The rest need to be obtained through food.', 'Aim for a combination of fruit and vegetables, whole-grain carbohydrates, lean protein and plant-based fat at every meal. Different food groups provide different nutrients!<br>Add some new meals to your weekly rotation. Some nutrients are lost during cooking, while others become more concentrated. Eating a combo of both is your best bet for maximizing your micros<br>Some supplements contain massive micronutrient doses which could put you at greater risk for toxicity.', 1, 0, '2021-04-05 21:21:00');

-- --------------------------------------------------------

--
-- 資料表結構 `level`
--

CREATE TABLE `level` (
  `mLevel` tinyint(1) NOT NULL,
  `mWriteD` int NOT NULL,
  `mTotal` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `level`
--

INSERT INTO `level` (`mLevel`, `mWriteD`, `mTotal`) VALUES
(1, 0, 0),
(2, 15, 1500),
(3, 30, 3000);

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `mNo` int NOT NULL,
  `mName` varchar(20) NOT NULL,
  `mId` varchar(10) NOT NULL,
  `mPsw` varchar(10) NOT NULL,
  `mMail` varchar(100) NOT NULL,
  `mPhone` char(10) DEFAULT NULL,
  `mImg` varchar(255) DEFAULT NULL,
  `mBday` date DEFAULT NULL,
  `mSex` tinyint(1) DEFAULT NULL,
  `mHeight` int DEFAULT NULL,
  `mIntro` varchar(200) DEFAULT NULL,
  `mPoints` int NOT NULL DEFAULT '0',
  `mLevel` tinyint(1) NOT NULL DEFAULT '1',
  `mWriteD` int NOT NULL DEFAULT '0',
  `mTotal` int NOT NULL DEFAULT '0',
  `mFoled` int NOT NULL DEFAULT '0',
  `mGoalW` decimal(4,1) DEFAULT NULL,
  `mGoalS` date DEFAULT NULL,
  `mGoalE` date DEFAULT NULL,
  `goalType` tinyint(1) NOT NULL DEFAULT '3',
  `mState` tinyint(1) NOT NULL DEFAULT '1',
  `loginDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`mNo`, `mName`, `mId`, `mPsw`, `mMail`, `mPhone`, `mImg`, `mBday`, `mSex`, `mHeight`, `mIntro`, `mPoints`, `mLevel`, `mWriteD`, `mTotal`, `mFoled`, `mGoalW`, `mGoalS`, `mGoalE`, `goalType`, `mState`, `loginDate`) VALUES
(1, '陳大胖', 'fatchen01', 'pwdfatchen', 'fatchen01@gmail.com', '0912345678', './memberImg/M_fatChen.jpg', '1996-02-21', 1, 180, '我是來自台中的大胖，喜歡拍照,並上傳到社群軟體上面,喜歡這種方式來記錄我的生活, 目前正在持續減重的我,意外地發現了ft這個網站,可以很輕易的控制我的體重,明顯數據可以讓我離清楚我現在的狀況。', 0, 3, 40, 5750, 5, '85.0', '2021-02-04', '2021-04-05', 3, 1, '2021-04-05'),
(2, '王小胖', 'fatwang02', 'A12345', 'fatwang02@gmail.com', '0923456781', './memberImg/M_fatWang.jpg', '1994-11-25', 1, 175, 'hi!~我是小胖,我是個好吃西餐的廚師助理,我因為工作的關係,常常吃到好吃的餐點,也常常會把我喜歡的食物組合在一起變成一個創意餐點,再一口氣吃光,讓我有點職業傷害,意外發現ft.的商城所賣商品,不但天然又能夠減肥,真的覺得很不錯。', 0, 3, 15, 3410, 5, '73.0', '2021-02-05', '2021-04-06', 3, 1, '2021-04-05'),
(3, '張瘦瘦', 'thinZhang', 'B12345', 'thinZhang@gmail.com', '0934567812', './memberImg/F_thinZhang.jpg', '1997-01-01', 2, 168, '目前就讀很厲害大學,服裝設計系的設計師,喜歡歐美設計風格,常常會把元素套用到我的設計作品上，為了把衣服撐起來所以靠ft來讓我達到目標體重,商城的產品,也讓我更輕易的增重。', 200, 2, 18, 2220, 2, '55.0', '2021-02-05', '2021-06-05', 3, 1, '2021-04-05'),
(4, '戴廚神', 'chefDai', 'C12345', 'chefDai@gmail.com', '0945678123', './memberImg/F_chefDai.jpg', '1984-11-28', 2, 173, '我是更好吃西餐的主廚兼老闆, 平時喜歡研發菜色, 品酒,閱讀,做瑜珈,有氧運動。', 100, 1, 5, 0, 5, '60.0', '2021-02-15', '2021-04-15', 3, 1, '2021-04-05'),
(5, '黃愛買', 'shopHuang', 'D12345', 'shopHuang@gmail.com', '0956781234', './memberImg/F_shopHuang.jpg', '1990-04-07', 2, 168, '徵公，會養，會疼，要帥、有健身，月薪10萬,您祖母就是有錢!', 0, 3, 0, 41520, 4, NULL, NULL, NULL, 3, 1, '2021-04-05'),
(6, 'Archie', 'Archie06', 'E12345', 'Archie06@gmail.com', NULL, './memberImg/M_archie.jpg', NULL, 1, 182, NULL, 100, 1, 0, 0, 2, NULL, NULL, NULL, 3, 1, '2021-04-05'),
(7, 'Stan', 'Stan07', 'F12345', 'Stan07@gmail.com', NULL, './memberImg/M_stan.jpg', NULL, 1, 173, NULL, 100, 1, 0, 0, 2, NULL, NULL, NULL, 3, 1, '2021-04-05'),
(8, 'Chester', 'Chester08', 'G12345', 'Chester08@gmail.com', NULL, './memberImg/M_chester.jpg', NULL, 1, 175, NULL, 100, 1, 0, 0, 2, NULL, NULL, NULL, 3, 1, '2021-04-05'),
(9, 'Una', 'Una009', 'H12345', 'Una009@gmail.com', NULL, './memberImg/F_una.jpg', NULL, 2, 171, NULL, 100, 1, 0, 0, 1, NULL, NULL, NULL, 3, 1, '2021-04-05'),
(10, 'Chloe', 'Chloe10', 'I12345', 'Chloe10@gmail.com', NULL, './memberImg/F_chloe.jpg', NULL, 2, 168, NULL, 100, 1, 0, 0, 1, NULL, NULL, NULL, 3, 1, '2021-04-05');

-- --------------------------------------------------------

--
-- 資料表結構 `message`
--

CREATE TABLE `message` (
  `mesNo` int NOT NULL,
  `mNo` int NOT NULL,
  `postNo` int NOT NULL,
  `mesContent` varchar(100) NOT NULL,
  `mesState` tinyint(1) NOT NULL,
  `mesTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `message`
--

INSERT INTO `message` (`mesNo`, `mNo`, `postNo`, `mesContent`, `mesState`, `mesTime`) VALUES
(1, 1, 1, '有人要一起組隊嗎?', 1, '2021-02-04 20:02:00'),
(2, 1, 2, '我也要去買！', 1, '2021-02-13 23:34:00'),
(3, 1, 3, '哇 也太厲害了', 1, '2021-02-16 15:12:00'),
(4, 2, 3, '看起來好好吃~已追蹤', 1, '2021-02-16 21:56:00'),
(5, 2, 4, '最喜歡看到這種開箱文！超棒的~已經追蹤你了', 1, '2021-02-19 13:34:00'),
(6, 7, 4, '太有錢了吧 一次買那麼多 大戶！', 1, '2021-02-19 15:52:00'),
(7, 5, 5, '加油加油', 1, '2021-02-27 13:53:00'),
(8, 2, 5, '我們一起組隊運動', 1, '2021-02-27 15:33:00'),
(9, 1, 6, '朋友推薦來的 看起來超好吃', 1, '2021-02-28 15:45:00'),
(10, 2, 6, '看起來好好吃~已追蹤', 1, '2021-02-28 16:12:00'),
(11, 5, 6, '跟著做了一次 我果然沒有天分Q_Q 我用買的就好', 1, '2021-02-28 20:34:00'),
(12, 6, 7, '哇 也太厲害了', 1, '2021-03-04 13:23:00'),
(13, 2, 7, '期待下次的分享', 1, '2021-03-04 15:13:00'),
(14, 5, 7, '佩服你的毅力', 1, '2021-03-04 16:20:00'),
(15, 10, 7, '加油加油', 1, '2021-03-04 19:02:00'),
(16, 1, 8, '佩服你的毅力', 1, '2021-03-05 21:57:00'),
(17, 5, 8, '加油加油', 1, '2021-03-05 22:07:00'),
(18, 7, 8, '期待下次的分享', 1, '2021-03-05 23:34:00'),
(19, 1, 9, '佩服你的毅力', 1, '2021-03-06 21:11:00'),
(20, 9, 9, '加油加油', 1, '2021-03-06 22:31:00'),
(21, 10, 9, '期待下次的分享', 1, '2021-03-06 22:33:00'),
(22, 2, 10, '佩服你的毅力', 1, '2021-03-08 11:44:00'),
(23, 3, 10, '加油加油', 1, '2021-03-08 11:52:00'),
(24, 4, 10, '期待下次的分享', 1, '2021-03-09 01:30:00'),
(25, 5, 10, '哇 也太厲害了', 1, '2021-03-09 09:02:00'),
(26, 1, 10, '好感動~我會繼續努力的', 1, '2021-03-09 10:31:00'),
(27, 5, 11, '跟著做了一次 我果然沒有天分Q_Q 我用買的就好', 1, '2021-03-11 13:43:00'),
(28, 2, 11, '看起來好好吃~已追蹤', 1, '2021-03-11 14:13:00'),
(29, 1, 11, '哇 也太厲害了', 1, '2021-03-11 15:07:00'),
(30, 3, 11, '朋友推薦來的 看起來超好吃', 1, '2021-03-11 17:41:00'),
(31, 9, 12, '呵呵 胖子是瘦不下來的', 1, '2021-03-13 23:02:00'),
(32, 3, 13, '我最近也想嘗試商城商品', 1, '2021-03-15 23:52:00'),
(33, 3, 13, '嗚嗚嗚都胖不起來 好羨慕你', 1, '2021-03-16 01:01:00'),
(34, 2, 13, '瘦子說話太過分了', 1, '2021-03-16 06:34:00'),
(35, 1, 14, '我跟你相反...', 1, '2021-03-19 11:33:00'),
(36, 2, 14, '瘦子的煩惱我們不懂', 1, '2021-03-19 13:39:00'),
(37, 10, 14, '商城食物超有效，記得要買有減卡路里效果的', 1, '2021-03-19 14:12:00'),
(38, 2, 15, '佩服你的毅力', 1, '2021-03-20 09:22:00'),
(39, 7, 15, '加油加油', 1, '2021-03-20 10:32:00'),
(40, 5, 16, '跟著做了一次 我果然沒有天分Q_Q 我用買的就好', 1, '2021-03-22 20:13:00'),
(41, 2, 16, '看起來好好吃~已追蹤', 1, '2021-03-22 20:44:00'),
(42, 1, 16, '哇 也太厲害了', 1, '2021-03-22 21:23:00'),
(43, 8, 16, '最喜歡看到這種文章！超棒的~已經追蹤你了', 1, '2021-03-22 22:48:00'),
(44, 9, 16, '該吃宵夜了', 1, '2021-03-22 23:35:00'),
(45, 5, 17, '贊成 你買的我都買過', 1, '2021-03-27 23:34:00'),
(46, 7, 17, '好像很好吃~', 1, '2021-03-27 23:54:00'),
(47, 7, 18, '太有錢了吧 一次買那麼多 大戶！', 1, '2021-04-02 14:21:00'),
(48, 2, 18, '最喜歡看到這種開箱文！超棒的~已經追蹤你了', 1, '2021-04-02 15:11:00'),
(49, 2, 18, '期待下次的分享', 1, '2021-04-02 20:44:00'),
(50, 9, 19, '大神最厲害', 1, '2021-04-03 21:43:00'),
(51, 3, 19, '我晚餐也要吃斜管麵', 1, '2021-04-03 23:02:00'),
(52, 5, 19, '跟著做了一次 我果然沒有天分Q_Q 我用買的就好', 1, '2021-04-03 23:48:00'),
(53, 1, 19, '看起來好好吃~已追蹤', 1, '2021-04-04 13:18:00'),
(54, 2, 19, '哇 也太厲害了', 1, '2021-04-04 15:38:00'),
(55, 8, 19, '朋友推薦來的 看起來超好吃', 1, '2021-04-04 17:22:00'),
(56, 1, 20, '這個口味真的讚', 1, '2021-04-05 20:19:00'),
(57, 5, 20, '贊成 你買的我都買過', 1, '2021-04-05 21:32:00'),
(58, 8, 20, '好像很好吃~', 1, '2021-04-05 23:31:00'),
(59, 5, 21, '要繼續努力 設定下一個目標', 1, '2021-04-05 03:33:00'),
(60, 2, 21, '嗚嗚嗚太感動了', 1, '2021-04-05 08:12:00'),
(61, 7, 21, '佩服你的毅力', 1, '2021-04-05 08:37:00'),
(62, 6, 21, '加油加油', 1, '2021-04-05 09:34:00'),
(63, 10, 21, '你一定會復胖的！', 1, '2021-04-05 10:12:00'),
(64, 1, 21, '好感動~我會繼續努力的', 1, '2021-04-05 11:34:00'),
(65, 2, 22, '最喜歡看到這種開箱文！超棒的~已經追蹤你了', 1, '2021-04-06 20:12:00'),
(66, 7, 22, '太有錢了吧 一次買那麼多 大戶！', 1, '2021-04-06 20:45:00'),
(67, 2, 22, '還有下一集嗎?', 1, '2021-04-06 22:23:00'),
(68, 1, 22, '期待下次的分享', 1, '2021-04-06 23:54:00'),
(69, 2, 1, '回兩個月前的發文！能達成目標實在是太厲害了', 1, '2021-04-06 22:12:00'),
(70, 7, 1, '佩服你的毅力', 1, '2021-04-07 08:10:00'),
(71, 5, 23, '佩服你的毅力', 1, '2021-04-07 09:07:00'),
(72, 2, 23, '加油加油', 1, '2021-04-07 10:11:00'),
(73, 6, 23, '佩服你的毅力', 1, '2021-04-07 11:23:00'),
(74, 7, 24, '佩服你的毅力', 1, '2021-04-08 15:24:00'),
(75, 2, 24, '嗚嗚嗚太感動了', 1, '2021-04-08 16:34:00'),
(76, 4, 24, '加油加油', 1, '2021-04-08 19:24:00'),
(77, 1, 24, '期待下次的分享', 1, '2021-04-08 21:02:00'),
(78, 3, 24, '好感動~我會繼續努力的', 1, '2021-04-08 23:12:00');

-- --------------------------------------------------------

--
-- 資料表結構 `messagereport`
--

CREATE TABLE `messagereport` (
  `mNo` int NOT NULL,
  `mesNo` int NOT NULL,
  `mesRepTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `mesRepFor` varchar(20) NOT NULL,
  `mesRevState` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `messagereport`
--

INSERT INTO `messagereport` (`mNo`, `mesNo`, `mesRepTime`, `mesRepFor`, `mesRevState`) VALUES
(1, 31, '2021-03-13 23:22:00', '1', 1),
(1, 63, '2021-04-05 11:12:00', '1', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `orderlist`
--

CREATE TABLE `orderlist` (
  `orderNo` int NOT NULL,
  `prodNo` int NOT NULL,
  `quantity` int NOT NULL,
  `price` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `orderlist`
--

INSERT INTO `orderlist` (`orderNo`, `prodNo`, `quantity`, `price`) VALUES
(1, 11, 1, 450),
(1, 12, 1, 420),
(1, 17, 1, 400),
(1, 18, 2, 420),
(2, 1, 6, 250),
(2, 2, 6, 300),
(2, 3, 6, 230),
(2, 4, 6, 250),
(2, 5, 6, 200),
(2, 6, 6, 300),
(2, 7, 6, 250),
(3, 1, 2, 250),
(3, 4, 2, 250),
(4, 3, 1, 230),
(4, 9, 1, 300),
(4, 10, 1, 350),
(4, 13, 3, 480),
(5, 1, 2, 450),
(6, 6, 1, 300),
(6, 9, 1, 300),
(6, 17, 1, 400),
(7, 8, 6, 250),
(7, 9, 6, 300),
(7, 10, 6, 350),
(7, 11, 6, 450),
(7, 12, 6, 420),
(7, 13, 6, 480),
(7, 14, 6, 450),
(8, 19, 1, 400),
(8, 20, 1, 450),
(9, 8, 4, 250),
(10, 7, 1, 250),
(10, 8, 2, 250),
(10, 9, 2, 300),
(10, 10, 1, 350),
(11, 15, 6, 420),
(11, 16, 6, 450),
(11, 17, 6, 400),
(11, 18, 6, 420),
(11, 19, 6, 400),
(11, 20, 6, 450),
(12, 12, 2, 420),
(12, 13, 2, 480);

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `orderNo` int NOT NULL,
  `mNo` int NOT NULL,
  `orderState` tinyint(1) NOT NULL DEFAULT '1',
  `usePoints` int NOT NULL DEFAULT '0',
  `total` int NOT NULL,
  `orderer` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `tel` char(10) NOT NULL,
  `orderDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`orderNo`, `mNo`, `orderState`, `usePoints`, `total`, `orderer`, `address`, `tel`, `orderDate`) VALUES
(1, 2, 2, 100, 2010, '王小胖', '新北市三重區中正北路20號', '0923456781', '2021-02-11 00:00:00'),
(2, 5, 2, 100, 10580, '黃愛買', '台中市西屯區中正路20號', '0956781234', '2021-02-16 00:00:00'),
(3, 1, 2, 300, 700, '陳大胖', '桃園市中壢區復興路46號8樓', '0912345678', '2021-03-15 00:00:00'),
(4, 3, 2, 100, 2220, '張瘦瘦', '台中市中區中正路20號', '0934567812', '2021-03-16 00:00:00'),
(5, 2, 2, 200, 700, '王小胖', '新北市三重區中正北路20號', '0923456781', '2021-03-25 00:00:00'),
(6, 1, 2, 300, 700, '陳大胖', '桃園市中壢區復興路46號8樓', '0912345678', '2021-03-30 00:00:00'),
(7, 5, 2, 500, 15700, '黃愛買', '台中市西屯區中正路20號', '0956781234', '2021-03-31 00:00:00'),
(8, 1, 2, 0, 850, '陳大胖', '桃園市中壢區復興路46號8樓', '0912345678', '2021-04-01 00:00:00'),
(9, 2, 2, 300, 700, '王小胖', '新北市三重區中正北路20號', '0923456781', '2021-04-02 00:00:00'),
(10, 1, 2, 0, 1700, '陳大胖', '桃園市中壢區復興路46號8樓', '0912345678', '2021-04-03 00:00:00'),
(11, 5, 2, 0, 15240, '黃愛買', '台中市西屯區中正路20號', '0956781234', '2021-04-04 00:00:00'),
(12, 1, 2, 0, 1800, '陳大胖', '桃園市中壢區復興路46號8樓', '0912345678', '2021-04-05 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `point`
--

CREATE TABLE `point` (
  `poNo` int NOT NULL,
  `poDur` tinyint(1) NOT NULL,
  `poType` tinyint(1) NOT NULL,
  `poName` varchar(20) NOT NULL,
  `startTime` date NOT NULL,
  `endTime` date DEFAULT NULL,
  `points` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `point`
--

INSERT INTO `point` (`poNo`, `poDur`, `poType`, `poName`, `startTime`, `endTime`, `points`) VALUES
(1, 2, 1, '註冊', '2021-04-05', NULL, 100),
(2, 2, 3, '升級Gold會員', '2021-04-05', NULL, 200),
(3, 2, 3, '升級Diamond會員', '2021-04-05', NULL, 300),
(4, 1, 2, '母親節', '2021-04-15', '2021-05-09', 20);

-- --------------------------------------------------------

--
-- 資料表結構 `post`
--

CREATE TABLE `post` (
  `postNo` int NOT NULL,
  `mNo` int NOT NULL,
  `postPhoto` varchar(255) DEFAULT NULL,
  `postContent` varchar(500) DEFAULT NULL,
  `postState` tinyint(1) NOT NULL DEFAULT '1',
  `mesCount` int NOT NULL DEFAULT '0',
  `postTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `post`
--

INSERT INTO `post` (`postNo`, `mNo`, `postPhoto`, `postContent`, `postState`, `mesCount`, `postTime`) VALUES
(1, 1, '', '卡路里日記day 1', 1, 2, '2021-02-04 08:22:00'),
(2, 2, '', '真的很好吃，包裝美觀大方，送禮自用兩相宜，運送速度也快！推薦CHOCOLATE ORANGE BAR口味，甜而不膩！', 1, 1, '2021-02-13 22:02:00'),
(3, 4, './postImg/3.jpg', 'Roasted Sweet Potatoes with Poached Eggs & Bell Pepper Salsa<br>Preheat the oven to 400°F (204°C) and line a baking sheet with foil or parchment.<br>Scrub the sweet potatoes and prick them a few times with a fork. Lay them on the parchment and bake for 45–60 minutes or until the flesh in the middle is soft enough to cut. Cool for about 5 minutes. Using a knife, slice them lengthwise (like a book — not all the way through) and gently pull the skin apart. Set each one on a plate.', 1, 2, '2021-02-16 13:27:00'),
(4, 5, '', 'ft. shop實在是太便宜了，這次小小嘗鮮一下買了七種口味<br>ALMONDS BAR 真的吃起來是又香又酥，會再回購的口味！<br>BANANA BAR 拿起來相當有份量，吃起來也非常滿足，也沒有使用色素，吃起來有天然的香蕉香氣，是我前三名喜歡的口味！<br>STRABERRY BITES 甜而不膩吃起來相當順口', 1, 2, '2021-02-19 10:07:00'),
(5, 1, './postImg/5.jpg', '228連假三天我一定要每天運動！', 1, 2, '2021-02-26 23:56:00'),
(6, 4, './postImg/6.jpg', 'CHICKEN AND BROCCOLI ALFREDO<br>Nutrition (per serving): Calories: 365; Total Fat: 12g; Saturated Fat: 1g; Monounsaturated Fat: 1g; Cholesterol: 0mg; Sodium: 314mg; Carbohydrate: 26g; Dietary Fiber: 7g; Sugar: 4g; Protein: 38g', 1, 3, '2021-02-28 13:13:00'),
(7, 1, '1號會員 體重報表', '', 1, 4, '2021-03-04 00:59:00'),
(8, 2, '2號會員 體重報表', '', 1, 3, '2021-03-05 19:15:00'),
(9, 2, '2號會員 食物報表', '', 1, 3, '2021-03-06 19:31:00'),
(10, 1, '1號會員 運動報表', '', 1, 5, '2021-03-08 11:34:00'),
(11, 4, './postImg/11.jpg', 'SMOKY BEER BRAISED BEEF BRISKET<br>Nutrition (per serving): Calories: 255; Total Fat: 7g; Saturated Fat: 2g; Monounsaturated Fat: 3g; Cholesterol: 11mg; Sodium: 108mg; Carbohydrate: 7g; Dietary Fiber: 2g; Sugar: 3g; Protein: 38g', 1, 4, '2021-03-10 21:12:00'),
(12, 1, '', '好煩阿 體重最近都掉不下來', 1, 1, '2021-03-13 21:22:00'),
(13, 1, '', '買了ft. shop的食物希望有用', 1, 3, '2021-03-15 21:51:00'),
(14, 3, '', '嗚嗚嗚最近好難胖 只好求助ft. shop', 1, 3, '2021-03-19 11:31:00'),
(15, 1, '1號會員 食物報表', '', 1, 2, '2021-03-20 08:07:00'),
(16, 4, './postImg/16.jpg', 'HOT AND SOUR SOUP WITH ASPARAGUS AND TOFU | MYFITNESSPAL’S RECIPES<br>Nutrition (per serving): Calories: 126; Total Fat: 4g; Saturated Fat: 1g; Monounsaturated Fat: 1g; Cholesterol: 0g; Sodium: 332g; Carbohydrate: 14g; Dietary Fiber: 4g; Sugar: 7g; Protein: 8g', 1, 5, '2021-03-22 19:23:00'),
(17, 2, '', '商城開箱文！今天收到了包裹~~FRUIT CEREAL超好吃', 1, 2, '2021-03-27 22:52:00'),
(18, 5, '', '分享我這次前二喜歡的口味！<br>PEANUT BAR 吃起來口感層次有更加豐富，香氣相當夠味。<br>HOCOLATE ORANGE BAR 外層酥脆的巧克力，重點是真的不會甜！', 1, 3, '2021-04-02 00:51:00'),
(19, 4, './postImg/19.jpg', 'PENNE WITH SPRING VEGETABLES | MYFITNESSPAL’S RECIPES<br>Nutrition (per serving): Calories: 330; Total Fat: 9g; Saturated Fat: 1g; Monounsaturated Fat: 6g; Cholesterol: 0mg; Sodium: 16mg; Carbohydrate: 54g; Dietary Fiber: 5g; Sugar: 5g; Protein: 11g', 1, 6, '2021-04-03 19:33:00'),
(20, 2, '', '天啊 這個CARAMEL BAR讓我驚為天人相見恨晚Q_Q 我要買十個', 1, 3, '2021-04-04 22:29:00'),
(21, 1, '1號會員 體重報表', '嗚嗚嗚嗚終於達到目標85', 1, 6, '2021-04-05 00:37:00'),
(22, 5, '', '已經習慣從ft. shop補貨零食<br>VEGGIE CRACKERS 非常健康的口味<br>SEA SALT CRACKERS 口感有層次，會再回購的口味！', 1, 4, '2021-04-06 20:02:00'),
(23, 1, '1號會員 運動報表', '', 1, 3, '2021-04-07 07:41:00'),
(24, 3, '3號會員 體重報表', '', 1, 5, '2021-04-08 14:24:00'),
(25, 10, '', '廣告貼文—淨下塑湲', 1, 0, '2021-04-08 15:24:00');

-- --------------------------------------------------------

--
-- 資料表結構 `postreport`
--

CREATE TABLE `postreport` (
  `mNo` int NOT NULL,
  `postNo` int NOT NULL,
  `postRepTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `postRepFor` varchar(20) NOT NULL,
  `postRevState` tinyint NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `postreport`
--

INSERT INTO `postreport` (`mNo`, `postNo`, `postRepTime`, `postRepFor`, `postRevState`) VALUES
(1, 25, '2021-04-08 15:34:00', '3', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `prodNo` int NOT NULL,
  `fdNo` int NOT NULL,
  `price` int NOT NULL,
  `des` varchar(500) NOT NULL,
  `prodPic1` varchar(255) NOT NULL,
  `prodPic2` varchar(255) NOT NULL,
  `prodPic3` varchar(255) NOT NULL,
  `prodState` tinyint(1) NOT NULL DEFAULT '1',
  `prodType` tinyint(1) NOT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `postTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`prodNo`, `fdNo`, `price`, `des`, `prodPic1`, `prodPic2`, `prodPic3`, `prodState`, `prodType`, `quantity`, `postTime`) VALUES
(1, 101, 250, 'The calories you consume of the meal gets 50% discount.\nIngredients dark chocolate (49%)\n(cacao mass, coconut sugar,cacao butter),\nroasted almonds (49%), cocoa powder, salt.for allergens, including cereals containing gluten, see ingredients in bold.', './productImg/prod1.png', './productImg/prod1_1.jpg', './productImg/prod1_2.jpg', 1, 3, 0, '2021-04-04 00:00:00'),
(2, 102, 300, 'Ingredients dates (60%), almonds (22%), cacao (9%), almond butter (7%), coconut oil, salt.\nmade in a facility that handles nuts and peanuts – for more information on this please click here\nfor allergens, including cereals containing gluten, see ingredients in bold.', './productImg/prod2.png', './productImg/prod2_1.jpg', './productImg/prod2_2.jpg', 1, 3, 0, '2021-04-04 00:00:00'),
(3, 103, 230, 'The calories you gain of the meal gets 110% PLUS.\nroasted almond butter (26%), roasted cashew butter (7%) gluten free oats (5%), freeze dried raspberries (4%).\nmade in a facility that handles nuts and peanuts – for more information on this please click here\nfor allergens, including cereals containing gluten, see ingredients in bold.', './productImg/prod3.png', './productImg/prod3_1.jpg', './productImg/prod3_2.jpg', 1, 3, 0, '2021-04-04 00:00:00'),
(4, 104, 250, 'The calories you consume of the meal gets 50% discount.dark chocolate (49%) (cacao mass, coconut sugar, cacao butter), roasted almonds (49%), cocoa powder, salt.\nmade in a facility that handles nuts and peanuts – for more information on this please click here\nfor allergens, including cereals containing gluten, see ingredients in bold.', './productImg/prod4.png', './productImg/prod4_1.jpg', './productImg/prod4_2.jpg', 1, 3, 0, '2021-04-04 00:00:00'),
(5, 105, 200, 'Ingredients dates (60%), almonds (22%), cacao (9%), almond butter (7%), coconut oil, salt.\nMade in a facility that handles nuts and peanuts.', './productImg/prod5.png', './productImg/prod5_1.jpg', './productImg/prod5_2.jpg', 1, 3, 0, '2021-04-04 00:00:00'),
(6, 106, 300, 'Ingredients gluten free oats (44%), brown rice syrup, coconut oil, raisins (8%), coconut sugar, sunflower oil, dried apple pieces (5%), ground cinnamon.', './productImg/prod6.png', './productImg/prod6_1.jpg', './productImg/prod6_2.jpg', 1, 3, 0, '2021-04-04 00:00:00'),
(7, 107, 250, 'Ingredients gluten free oats (25.6%), brown rice syrup, peanuts (15%), sultanas (10%), cashews (6.5%), brazil nuts (6%), walnuts (6%), coconut sugar, coconut oil, sunflower oil.', './productImg/prod7.png', './productImg/prod7_1.jpg', './productImg/prod7_2.jpg', 1, 3, 0, '2021-04-05 00:00:00'),
(8, 108, 250, 'Ingredients gluten free oats (41%), brown rice syrup, roasted peanuts (15%), coconut oil, coconut sugar, date syrup, roasted peanut butter (4%), sunflower oil, salt.', './productImg/prod8.png', './productImg/prod8_1.jpg', './productImg/prod8_2.jpg', 1, 3, 0, '2021-04-05 00:00:00'),
(9, 109, 300, 'Ingredients dark chocolate (50%) (cacao mass, coconut sugar, cacao butter), roasted almonds (50%), orange oil.', './productImg/prod9.png', './productImg/prod9_1.jpg', './productImg/prod9_2.jpg', 1, 3, 0, '2021-04-05 00:00:00'),
(10, 110, 350, 'Ingredients date syrup, gluten free oats (26%) coconut oil, dark chocolate (11%) (cacao nibs, coconut sugar, cacao butter), coconut sugar, cacao powder (6%), roasted almond butter maple syrup, salt.', './productImg/prod10.png', './productImg/prod10_1.jpg', './productImg/prod10_2.jpg', 1, 3, 0, '2021-04-05 00:00:00'),
(11, 111, 450, 'Ingredients gluten free oats (85%), dried apple (6%), raisins (5%), sunflower seeds (2%), chia (salvia hispanica) seeds, freeze dried raspberries (1%).', './productImg/prod11.png', './productImg/prod11_1.jpg', './productImg/prod11_2.jpg', 1, 1, 0, '2021-04-05 00:00:00'),
(12, 112, 420, 'The calories you consume of the meal gets 50% discount. Ingredients gluten free oats (60%), mixed nuts (13%), (cashews (6%), almonds (4%), hazelnuts (3%)), date syrup, sunflower oil, maple syrup (4%), sunflower seeds (3%), orange juice (3%), pumpkin seeds (2%).', './productImg/prod12.png', './productImg/prod12_1.jpg', './productImg/prod12_2.jpg', 1, 1, 0, '2021-04-05 00:00:00'),
(13, 113, 480, 'Ingredients\nmaize (34%), brown rice flour (25.8%), roasted hazelnuts (12%), raisins (12%), coconut sugar (8.9%), amaranth flour (3.7%), toasted coconut chips, millet flour, salt.', './productImg/prod13.png', './productImg/prod13_1.jpg', './productImg/prod13_2.jpg', 1, 1, 0, '2021-04-06 00:00:00'),
(14, 114, 450, 'Ingredients gluten free oats (73%), date syrup, sunflower oil, orange juice, freeze dried mixed berries (3%) (raspberries, blackcurrants, blueberries), sunflower seeds (2%).', './productImg/prod14.png', './productImg/prod14_1.jpg', './productImg/prod14_2.jpg', 1, 1, 0, '2021-04-06 00:00:00'),
(15, 115, 420, 'Ingredients gluten free oats (40%), roasted buckwheat (19%), date syrup, sunflower seeds (8%), puffed brown rice (6%), raisins (6%), sunflower oil, pumpkin seeds (3%), orange juice, desiccated coconut chips (2%), desiccated coconut.', './productImg/prod15.png', './productImg/prod15_1.jpg', './productImg/prod15_2.jpg', 1, 1, 0, '2021-04-06 00:00:00'),
(16, 116, 450, 'Ingredients gluten free jumbo oats (72%), raisins (10%), almonds (7%) dried apricots (5%), pumpkin seeds (5%), chia (salvia hispanica) seeds (2%).', './productImg/prod16.png', './productImg/prod16_1.jpg', './productImg/prod16_2.jpg', 1, 1, 0, '2021-04-06 00:00:00'),
(17, 117, 400, 'Ingredients rice flour, cassava flour, chickpea flour (13%), corn flour, wholegrain rice flour, brown rice syrup, rapeseed oil, chia (salvia hispanica) seeds, salt, nigella seeds, smoked paprika, dried coriander, dried cumin, jalapeno chilli.', './productImg/prod17.png', './productImg/prod17_1.jpg', './productImg/prod17_2.jpg', 1, 2, 0, '2021-04-06 00:00:00'),
(18, 118, 420, 'Ingredients rice flour, cassava flour, sweet potato flour (13%), corn flour, rapeseed oil, wholegrain rice flour, brown rice syrup, chia (salvia hispanica) seeds, dried rosemary, salt, nigella seeds, paprika, turmeric.', './productImg/prod18.png', './productImg/prod18_1.jpg', './productImg/prod18_2.jpg', 1, 2, 0, '2021-04-06 00:00:00'),
(19, 119, 400, 'Ingredients rice flour, cassava flour, corn flour, wholegrain rice flour, rapeseed oil, brown rice syrup, beetroot flour (6%), mixed seeds (3%) (chia (salvia hispanica) seeds, poppy seeds, nigella seeds), salt.', './productImg/prod19.png', './productImg/prod19_1.jpg', './productImg/prod19_2.jpg', 1, 2, 0, '2021-04-06 00:00:00'),
(20, 120, 450, 'Ingredients rice flour, cassava flour, sweet potato flour, seeds (10.5%) (chia, nigella, poppy), corn flour, brown rice syrup, wholegrain rice flour, canola/rapeseed oil, sea salt (3%), olive oil (1.2%), black pepper (0.8%), paprika.', './productImg/prod20.png', './productImg/prod20_1.jpg', './productImg/prod20_2.jpg', 1, 2, 0, '2021-04-06 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `sport`
--

CREATE TABLE `sport` (
  `spNo` int NOT NULL,
  `spName` varchar(10) NOT NULL,
  `spCalPer` decimal(3,2) NOT NULL,
  `spType` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `sport`
--

INSERT INTO `sport` (`spNo`, `spName`, `spCalPer`, `spType`) VALUES
(1, '散步', '1.75', 1),
(2, '騎腳踏車-慢', '2.00', 1),
(3, '瑜珈', '1.50', 1),
(4, '健康操', '2.00', 1),
(5, '保齡球', '1.80', 1),
(6, '高爾夫球', '2.50', 1),
(7, '溜直排輪', '2.55', 1),
(8, '羽毛球', '2.55', 1),
(9, '乒乓球', '2.10', 1),
(10, '排球', '1.80', 1),
(11, '棒球', '2.35', 1),
(12, '划船', '2.20', 1),
(13, '太極拳', '2.10', 1),
(14, '拖地', '1.85', 1),
(15, '園藝', '2.10', 1),
(16, '慢跑', '4.10', 2),
(17, '游泳-慢', '3.15', 2),
(18, '騎腳踏車-快', '4.20', 2),
(19, '籃球', '4.15', 2),
(20, '跳繩-慢', '4.20', 2),
(21, '網球', '3.30', 2),
(22, '足球', '3.85', 2),
(23, '攀岩', '3.50', 2),
(24, '有氧舞蹈', '3.40', 2),
(25, '手球', '4.40', 2),
(26, '快跑', '8.40', 3),
(27, '游泳-快', '5.00', 3),
(28, '騎腳踏車-很快', '6.30', 3),
(29, '跳繩-快', '6.30', 3),
(30, '拳擊', '5.70', 3);

-- --------------------------------------------------------

--
-- 資料表結構 `sprecord`
--

CREATE TABLE `sprecord` (
  `spRNo` int NOT NULL,
  `mNo` int NOT NULL,
  `spCalTal` decimal(7,2) NOT NULL,
  `spTime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `sprecord`
--

INSERT INTO `sprecord` (`spRNo`, `mNo`, `spCalTal`, `spTime`) VALUES
(1, 1, '1190.00', '2021-02-04'),
(2, 1, '2915.00', '2021-02-09'),
(3, 1, '3360.00', '2021-02-14'),
(4, 3, '81.00', '2021-02-19'),
(5, 1, '2190.00', '2021-02-19'),
(6, 4, '180.00', '2021-02-20'),
(7, 1, '1420.00', '2021-02-28'),
(8, 1, '396.00', '2021-03-05'),
(9, 3, '509.60', '2021-03-12'),
(10, 1, '999.00', '2021-03-19'),
(11, 1, '1192.50', '2021-03-26'),
(12, 1, '612.00', '2021-04-02'),
(13, 3, '198.00', '2021-04-03');

-- --------------------------------------------------------

--
-- 資料表結構 `spritem`
--

CREATE TABLE `spritem` (
  `spRNo` int NOT NULL,
  `spNo` int NOT NULL,
  `spTimeSpan` int NOT NULL,
  `spItemCal` decimal(7,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `spritem`
--

INSERT INTO `spritem` (`spRNo`, `spNo`, `spTimeSpan`, `spItemCal`) VALUES
(1, 1, 60, '350.00'),
(1, 18, 60, '840.00'),
(2, 8, 30, '255.00'),
(2, 9, 20, '140.00'),
(2, 26, 90, '2520.00'),
(3, 18, 60, '840.00'),
(3, 26, 90, '2520.00'),
(4, 5, 30, '81.00'),
(5, 16, 60, '820.00'),
(5, 23, 30, '350.00'),
(5, 24, 90, '1020.00'),
(6, 3, 60, '180.00'),
(7, 13, 30, '210.00'),
(7, 14, 60, '370.00'),
(7, 15, 120, '840.00'),
(8, 25, 30, '396.00'),
(9, 3, 60, '156.00'),
(9, 24, 60, '353.60'),
(10, 4, 90, '540.00'),
(10, 8, 60, '459.00'),
(11, 8, 90, '688.50'),
(11, 9, 80, '504.00'),
(12, 24, 60, '612.00'),
(13, 5, 60, '198.00');

-- --------------------------------------------------------

--
-- 資料表結構 `weigth`
--

CREATE TABLE `weigth` (
  `mNo` int NOT NULL,
  `wDate` date NOT NULL,
  `wWeight` decimal(4,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `weigth`
--

INSERT INTO `weigth` (`mNo`, `wDate`, `wWeight`) VALUES
(1, '2021-02-04', '100.0'),
(1, '2021-02-11', '97.0'),
(1, '2021-02-16', '95.0'),
(1, '2021-02-24', '92.0'),
(1, '2021-03-05', '90.0'),
(1, '2021-03-09', '89.0'),
(1, '2021-03-14', '89.0'),
(1, '2021-04-05', '85.0'),
(2, '2021-02-05', '85.0'),
(2, '2021-04-05', '73.0'),
(3, '2021-02-05', '45.0'),
(3, '2021-03-06', '52.0'),
(3, '2021-04-06', '55.0'),
(4, '2021-02-15', '60.0'),
(4, '2021-02-28', '59.0'),
(4, '2021-03-05', '60.0'),
(4, '2021-03-15', '61.0'),
(4, '2021-03-18', '61.0'),
(4, '2021-03-23', '60.0'),
(4, '2021-03-31', '55.0'),
(4, '2021-04-06', '60.0');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`aNo`),
  ADD UNIQUE KEY `aId` (`aId`);

--
-- 資料表索引 `chatbot`
--
ALTER TABLE `chatbot`
  ADD PRIMARY KEY (`keyNo`);

--
-- 資料表索引 `dietrecord`
--
ALTER TABLE `dietrecord`
  ADD PRIMARY KEY (`dtRNo`),
  ADD KEY `mNo` (`mNo`);

--
-- 資料表索引 `dtritem`
--
ALTER TABLE `dtritem`
  ADD PRIMARY KEY (`dtRNo`,`fdNo`),
  ADD KEY `fdNo` (`fdNo`);

--
-- 資料表索引 `favoritea`
--
ALTER TABLE `favoritea`
  ADD PRIMARY KEY (`infoNo`,`mNo`),
  ADD KEY `mNo` (`mNo`),
  ADD KEY `infoNo` (`infoNo`);

--
-- 資料表索引 `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`mNo`,`mNoFollow`),
  ADD KEY `mNoFollow` (`mNoFollow`);

--
-- 資料表索引 `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`fdNo`),
  ADD KEY `mNo` (`mNo`);

--
-- 資料表索引 `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`infoNo`);

--
-- 資料表索引 `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`mLevel`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`mNo`),
  ADD UNIQUE KEY `mId` (`mId`) USING BTREE,
  ADD UNIQUE KEY `mMail` (`mMail`),
  ADD KEY `mLevel` (`mLevel`);

--
-- 資料表索引 `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`mesNo`),
  ADD KEY `mNo` (`mNo`),
  ADD KEY `postNo` (`postNo`);

--
-- 資料表索引 `messagereport`
--
ALTER TABLE `messagereport`
  ADD PRIMARY KEY (`mNo`,`mesNo`),
  ADD KEY `mesNo` (`mesNo`);

--
-- 資料表索引 `orderlist`
--
ALTER TABLE `orderlist`
  ADD PRIMARY KEY (`orderNo`,`prodNo`),
  ADD KEY `prodNo` (`prodNo`);

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderNo`),
  ADD KEY `mNo` (`mNo`);

--
-- 資料表索引 `point`
--
ALTER TABLE `point`
  ADD PRIMARY KEY (`poNo`);

--
-- 資料表索引 `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postNo`),
  ADD KEY `mNo` (`mNo`);

--
-- 資料表索引 `postreport`
--
ALTER TABLE `postreport`
  ADD PRIMARY KEY (`mNo`,`postNo`),
  ADD KEY `postNo` (`postNo`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`prodNo`),
  ADD KEY `fdNo` (`fdNo`);

--
-- 資料表索引 `sport`
--
ALTER TABLE `sport`
  ADD PRIMARY KEY (`spNo`);

--
-- 資料表索引 `sprecord`
--
ALTER TABLE `sprecord`
  ADD PRIMARY KEY (`spRNo`),
  ADD KEY `mNo` (`mNo`);

--
-- 資料表索引 `spritem`
--
ALTER TABLE `spritem`
  ADD PRIMARY KEY (`spRNo`,`spNo`),
  ADD KEY `spNo` (`spNo`);

--
-- 資料表索引 `weigth`
--
ALTER TABLE `weigth`
  ADD PRIMARY KEY (`mNo`,`wDate`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `admin`
--
ALTER TABLE `admin`
  MODIFY `aNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `chatbot`
--
ALTER TABLE `chatbot`
  MODIFY `keyNo` int NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `dietrecord`
--
ALTER TABLE `dietrecord`
  MODIFY `dtRNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `food`
--
ALTER TABLE `food`
  MODIFY `fdNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `information`
--
ALTER TABLE `information`
  MODIFY `infoNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `mNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `orderNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `point`
--
ALTER TABLE `point`
  MODIFY `poNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post`
--
ALTER TABLE `post`
  MODIFY `postNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `prodNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `sport`
--
ALTER TABLE `sport`
  MODIFY `spNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `sprecord`
--
ALTER TABLE `sprecord`
  MODIFY `spRNo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `dietrecord`
--
ALTER TABLE `dietrecord`
  ADD CONSTRAINT `dietrecord_ibfk_1` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `dtritem`
--
ALTER TABLE `dtritem`
  ADD CONSTRAINT `dtritem_ibfk_1` FOREIGN KEY (`fdNo`) REFERENCES `food` (`fdNo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `dtritem_ibfk_2` FOREIGN KEY (`dtRNo`) REFERENCES `dietrecord` (`dtRNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `favoritea`
--
ALTER TABLE `favoritea`
  ADD CONSTRAINT `favoritea_ibfk_1` FOREIGN KEY (`infoNo`) REFERENCES `information` (`infoNo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `favoritea_ibfk_2` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `follow`
--
ALTER TABLE `follow`
  ADD CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`mNoFollow`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `food_ibfk_1` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_ibfk_1` FOREIGN KEY (`mLevel`) REFERENCES `level` (`mLevel`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`postNo`) REFERENCES `post` (`postNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `messagereport`
--
ALTER TABLE `messagereport`
  ADD CONSTRAINT `messagereport_ibfk_1` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `messagereport_ibfk_2` FOREIGN KEY (`mesNo`) REFERENCES `message` (`mesNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `orderlist`
--
ALTER TABLE `orderlist`
  ADD CONSTRAINT `orderlist_ibfk_1` FOREIGN KEY (`orderNo`) REFERENCES `orders` (`orderNo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `orderlist_ibfk_2` FOREIGN KEY (`prodNo`) REFERENCES `product` (`prodNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `postreport`
--
ALTER TABLE `postreport`
  ADD CONSTRAINT `postreport_ibfk_1` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `postreport_ibfk_2` FOREIGN KEY (`postNo`) REFERENCES `post` (`postNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`fdNo`) REFERENCES `food` (`fdNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `sprecord`
--
ALTER TABLE `sprecord`
  ADD CONSTRAINT `sprecord_ibfk_1` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `spritem`
--
ALTER TABLE `spritem`
  ADD CONSTRAINT `spritem_ibfk_1` FOREIGN KEY (`spNo`) REFERENCES `sport` (`spNo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `spritem_ibfk_2` FOREIGN KEY (`spRNo`) REFERENCES `sprecord` (`spRNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `weigth`
--
ALTER TABLE `weigth`
  ADD CONSTRAINT `weigth_ibfk_1` FOREIGN KEY (`mNo`) REFERENCES `member` (`mNo`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
