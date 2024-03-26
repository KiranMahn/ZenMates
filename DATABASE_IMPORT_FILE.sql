-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: devweb2023.cis.strath.ac.uk:3306
-- Generation Time: Mar 26, 2024 at 03:25 PM
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
-- Database: `Group 10 DB`
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
  `body` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`articleID`, `title`, `image`, `description`, `body`) VALUES
(0, 'What is mindfulness?', './assets/chatIcon.png', 'Mindfulness involves paying attention to what is going on inside and outside ourselves, moment by moment.', 'It\'s easy to stop noticing the world around us. It\'s also easy to lose touch with the way our bodies are feeling and to end up living \"in our heads\" – caught up in our thoughts without stopping to notice how those thoughts are driving our emotions and behaviour.\r\n\r\nAn important part of mindfulness is reconnecting with our bodies and the sensations they experience. This means paying attention to the sights, sounds, smells and tastes of the present moment. That might be something as simple as the feel of a banister as we walk upstairs.\r\n\r\nAnother important part of mindfulness is an awareness of our thoughts and feelings as they happen moment to moment.\r\n\r\nArticle written by NHS: https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/what-is-mindfulness/#tips-and-techniques'),
(1, 'The three Cs of mindfulness\r\n', './assets/bookIcon.png', 'These are the three Cs of mindfulness: curiosity, compassion, and calm centre.', 'Approaching life with a curious mentality can be helpful in difficult situations.\r\n\r\nFor example, if someone treats us badly or reacts in a way we were not expecting, stopping to think about why could be useful.\r\n\r\nNot only will it help us see things from their perspective, but it turns us into an observer of the problem rather than a participant.\r\n\r\nTaking this step back from the problem itself can help us feel calmer. \r\nIt can be much harder to show the same compassion to ourselves as we do to other people.\r\n\r\nWe\'re often much more critical of ourselves, particularly in tough situations, but this just makes a difficult time feel worse.\r\n\r\nThe mindful way is to meet life\'s challenges with an element of self-compassion, rather than passing judgment on yourself.\r\n\r\nWhen you next face something difficult or disappointing, run through some of these phrases in your head:\r\n\r\n\"I\'m okay.\"\r\n\"I can handle this.\"\r\n\"I\'m doing my best.\"\r\n\"One setback does not mean I will fail.\"\r\n\"I do not need to be perfect.\"\r\n\"I can have limitations.\"\r\nAt first you will have to make a real effort to do this but, over time, it should become more natural.\r\n\r\nLike being curious, developing a calm centre is about standing back from things to gain perspective.\r\n\r\nTry thinking of yourself as viewing a difficult situation through a telescope: a step removed and standing at a distance from the stress.\r\n\r\nThis can help you feel like you are in a calmer, more centred place and give you the space you need to respond in a considered way, rather than reacting with raw emotions.\r\n\r\nArticle written by NHS: https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/what-is-mindfulness/#tips-and-techniques'),
(2, 'Practising mindfulness\r\n', './assets/chatIcon.png', 'If the guidance and techniques on this page appeal to you, you might find it helpful to try living in a more mindful way.', 'Try setting aside a small amount of time each day to do some of the exercises suggested above – and think up similar ones for yourself.\r\n\r\nWhen you hit a difficult situation, try to put into practice some of what you have learnt, so you can react thoughtfully rather than emotionally. Hopefully this will lead to better outcomes.\r\n\r\nTo start with, you will find you need to consciously practise mindfulness. But over time, it should become more natural and eventually automatic.\r\n\r\nArticle written by NHS: https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/what-is-mindfulness/#practising-mindfulness'),
(3, 'Dealing with stress\r\n', './assets/bookIcon.png', 'Stress is something everyone feels at times, especially when dealing with change or life challenges, such as money worries, work issues or relationship problems.\r\n\r\n', 'A little stress can be a good thing, as it helps us to get things done or focus on something that needs our attention.\r\n\r\nHow we manage stress can make a big difference to our mental wellbeing, and the first step to managing it is to know how it affects us and why.\r\n\r\nFind out about common symptoms of stress and possible causes. Plus get advice on stress relief, and a personalised plan of self-care tips.\r\n\r\nStress is the body\'s reaction to feeling threatened or under pressure.\r\n\r\nWhen we are stressed, our body releases a hormone called adrenaline (often called the \"fight or flight\" hormone), which usually gives us a boost or motivates us to act quickly.\r\n\r\nBut too much stress can affect our mood, our body and our relationships – especially when it feels out of our control. It can make us feel anxious and irritable, and affect our self-esteem.\r\n\r\nExperiencing long-term stress or severe stress can lead to feeling physical, mental and emotional exhaustion, often called \"burnout\"\r\n\r\nTry these practical self-care tips, as they might make a big difference.\r\n\r\n\r\nTry self-help techniques\r\nOur short videos and practical guides to cognitive behavioural therapy (CBT) can help you deal with stress by working through problems in new ways and building resilience. Try our self-help CBT techniques\r\n\r\n\r\nTry positive thinking\r\nPositive thinking can help with stress relief, so take time to think about the good things in your life. Each day, list 3 things you\'re thankful for, however small.\r\n\r\n\r\nTalk to someone\r\nTrusted friends, family and colleagues, or contacting a helpline, can help us when we are struggling. Check out our video on social connection.\r\n\r\n\r\nSplit up big tasks\r\nYou might feel less stressed if you can take practical steps, such as breaking a task down into easier, more manageable chunks. And give yourself credit when you finish a task.\r\n\r\n\r\nBe more active\r\nBeing active regularly can help you to burn off nervous energy, so it could be a way for you to deal with stress. Exercise might also help you manage or reduce stress. Try our Better Health: Home workout videos.\r\n\r\n\r\nPlan ahead\r\nPlanning ahead for upcoming stressful days or events – creating a to-do list, planning your journey and listing things you need to take – can really help to relieve stress.\r\n\r\nArticle written by NHS: https://www.nhs.uk/every-mind-matters/mental-health-issues/stress/');

-- --------------------------------------------------------

--
-- Table structure for table `discussionBoard`
--

CREATE TABLE `discussionBoard` (
  `postID` int NOT NULL,
  `authorID` int NOT NULL,
  `title` text NOT NULL,
  `body` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `discussionBoard`
--

INSERT INTO `discussionBoard` (`postID`, `authorID`, `title`, `body`) VALUES
(1, 21, 'The importance of a good nights sleep', 'Sleep is key. it is underrated. Honestly. See I used to get a good 9 hours every night but now I don\'t. You need recovery and sleep gives you that. Steven out'),
(4, 4, 'Healthy Diet', 'If you don\'t have a healthy diet it is really hard to practice mindfulness. I find if I haven\'t eaten that day mindfulness is near impossible. Eat whole foods and lots of fruit and veg to feel your best.'),
(25, 47, 'Hello', 'World'),
(26, 47, 'Post 2', 'Hello'),
(27, 47, 'Post 3', 'Wrold');

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `friendID` int NOT NULL,
  `initiatedUser` int NOT NULL,
  `requestedUser` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`friendID`, `initiatedUser`, `requestedUser`) VALUES
(2, 21, 1),
(3, 4, 21),
(24, 1, 4),
(25, 1, 45),
(26, 46, 1),
(27, 46, 4),
(28, 47, 1),
(29, 47, 4);

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
  `password` varchar(64) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`profileID`, `firstName`, `lastName`, `dob`, `gender`, `username`, `email`, `password`, `phone`) VALUES
(1, 'Noah', 'Castaneda', '13-09-2002', 'Male', 'noahc', 'noah@mad.com', '1234', '0754384024'),
(4, 'Kiran', 'Mahn', '1-1-2003', 'Female', 'kiranm', 'kiran@mad.com', '4321qwer', '0000000000'),
(21, 'Jake', 'Corbin', '1-1-2024', 'Male', 'jakec', 'jake@mad.com', '1234asdf', '1111111111'),
(44, 'Iona', 'Kaur', '17-05-2023', 'Female', 'kirnicat', 'kiran@raintown.org', 'mmm', '+16506603438'),
(45, 'Kavi', 'Smith', '1-2-2024', 'Male', 'kavis', 'kavi@mad.com', '1234', '456789234'),
(46, 'Kyle', 'Chamber', '05-08-2001', 'Male', 'kylec', 'kyle@mad.com', '1234qwer', '789012346'),
(47, 'Nick', 'Fosses', '12-06-1999', 'Male', 'nickf', 'nick@mad.com', '1234', '12309856');

-- --------------------------------------------------------

--
-- Table structure for table `userStats`
--

CREATE TABLE `userStats` (
  `userID` int NOT NULL,
  `streak` int NOT NULL DEFAULT '0',
  `medals` int NOT NULL DEFAULT '0',
  `friends` int NOT NULL DEFAULT '0',
  `points` int NOT NULL DEFAULT '0',
  `posts` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `userStats`
--

INSERT INTO `userStats` (`userID`, `streak`, `medals`, `friends`, `points`, `posts`) VALUES
(1, 1, 2, 9, 625, 12),
(4, 0, 0, 0, 0, 0),
(21, 0, 0, 0, 0, 0),
(44, 0, 0, 0, 0, 0),
(45, 0, 0, 0, 0, 0),
(46, 0, 1, 2, 420, 4),
(47, 0, 1, 2, 415, 4);

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
  ADD PRIMARY KEY (`postID`);

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`friendID`),
  ADD UNIQUE KEY `friendID` (`friendID`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`profileID`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `profileID` (`profileID`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `phone` (`phone`);

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
  MODIFY `postID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `friendID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `profileID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `userStats`
--
ALTER TABLE `userStats`
  MODIFY `userID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
