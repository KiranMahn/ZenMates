-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: devweb2023.cis.strath.ac.uk:3306
-- Generation Time: Mar 15, 2024 at 11:45 AM
-- Server version: 8.0.36-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ckb23158`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `articleID` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(127) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `body` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`articleID`, `title`, `image`, `description`, `body`) VALUES
(0, 'Breathing', './assets/chatIcon.png', 'this is an article about breathing', 'breath better idk'),
(1, 'Meditation', './assets/bookIcon.png', 'this is an article about meditation', 'just meditate lol'),
(2, 'Verbal Meditation', './assets/chatIcon.png', 'Out loud meditation', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'),
(3, 'Breathing exercises for stress', './assets/bookIcon.png', 'Learn to be thoughtful towards yourself and others', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus');

-- --------------------------------------------------------

--
-- Table structure for table `discussionBoard`
--

CREATE TABLE `discussionBoard` (
  `postID` int NOT NULL,
  `author` int NOT NULL,
  `title` int NOT NULL,
  `body` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `profileID` int NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `dob` varchar(10) NOT NULL,
  `gender` set('Male','Female') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`profileID`, `firstName`, `lastName`, `dob`, `gender`, `username`, `email`, `password`) VALUES
(1, 'Noah', 'Castaneda', '13-09-2002', 'Male', 'noahc', 'noah@mad.com', '1234asdf');

-- --------------------------------------------------------

--
-- Table structure for table `userStats`
--

CREATE TABLE `userStats` (
  `userID` int NOT NULL,
  `streak` int NOT NULL DEFAULT '0',
  `medals` int NOT NULL DEFAULT '0',
  `friends` int NOT NULL DEFAULT '0',
  `points` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `userStats`
--

INSERT INTO `userStats` (`userID`, `streak`, `medals`, `friends`, `points`) VALUES
(1, 10, 82, 5, 1250);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`articleID`),
  ADD UNIQUE KEY `articleID` (`articleID`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `discussionBoard`
--
ALTER TABLE `discussionBoard`
  ADD PRIMARY KEY (`postID`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`profileID`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `profileID` (`profileID`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `userStats`
--
ALTER TABLE `userStats`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `userID` (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `articleID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `discussionBoard`
--
ALTER TABLE `discussionBoard`
  MODIFY `postID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `profileID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
