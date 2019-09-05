-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-09-05 02:24:08
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nubia`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(6) NOT NULL COMMENT 'id',
  `title` varchar(100) NOT NULL COMMENT 'title',
  `subtitle` varchar(200) NOT NULL COMMENT 'subtitle',
  `price` varchar(8) NOT NULL COMMENT 'price',
  `imgurl` varchar(500) CHARACTER SET utf8mb4 NOT NULL COMMENT 'imgurl'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `subtitle`, `price`, `imgurl`) VALUES
(6, 'Z18mini 青瓷蓝 6GB+128GB', '张浩雨彩蛋', '1599.00', '\'["https://oss.static.nubia.cn/active/5cc509862275d5.png","https://oss.static.nubia.cn/active/5cc5098660dcb73.png","https://oss.static.nubia.cn/active/5cc50986bef2325.png","https://oss.static.nubia.cn/active/5cc509862888764.png"]\''),
(5, 'Z18 极夜黑 8GB+128GB', '骁龙845、电竞RGB炫彩灯带', '2699.00', '\'["https://oss.static.nubia.cn/active/5caab828be8847.png","https://oss.static.nubia.cn/active/5caab828c1c3e16.png","https://oss.static.nubia.cn/active/5caab828c31f316.png","https://oss.static.nubia.cn/active/5caab828cae8696.png"]\''),
(4, '红魔Mars 烈焰红 6GB+64GB', '骁龙845、电竞RGB炫彩灯带', '1899.00', '\'["https://oss.static.nubia.cn/pic/154097575547.png","https://oss.static.nubia.cn/pic/154097575561.png","https://oss.static.nubia.cn/pic/154097575510.png","https://oss.static.nubia.cn/pic/15409757545.png"]\''),
(3, 'X 深空灰 6GB+64GB', '双屏黑科技、1600+2400万AI自拍', '2199.00', '\'["https://oss.static.nubia.cn/upload/5c161f447c1ff9.png","https://oss.static.nubia.cn/upload/5c161f4678f2f52.png","https://oss.static.nubia.cn/upload/5c161f4679b1965.png","https://oss.static.nubia.cn/upload/5c161f468532781.png"]\''),
(2, '努比亚阿尔法 伯爵黑（联通版） 1G+8G', '六期免息、赠nubia pods', '2499.00', '\'["https://oss.static.nubia.cn/active/5c3800759b73917.png","https://oss.static.nubia.cn/active/5c380076141a728.png","https://oss.static.nubia.cn/active/5c380075e3b756.png","https://oss.static.nubia.cn/active/5c3800761819c78.png"]\''),
(1, '红魔3 赤焰红 8GB+128GB', '【9月4日10点】6+128GB直降300元，低至：2499元， 8+128GB直降300元，低至：2699元', '2999.00', '\'["https://oss.static.nubia.cn/pic/152583158615.png","https://oss.static.nubia.cn/pic/152583158645.png","https://oss.static.nubia.cn/pic/152583158682.png","https://oss.static.nubia.cn/pic/152583158734.png"]\'');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'id', AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
