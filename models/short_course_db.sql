CREATE DATABASE test;
use test;

CREATE TABLE `course` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `lec_name` text NOT NULL,
  `lec_nickname` text NOT NULL,
  `role` text NOT NULL,
  `date` text NOT NULL,
  `time` text NOT NULL,
  `course_name` text NOT NULL,
  `des` text NOT NULL,
  `device` text NOT NULL,
  `tool` text NOT NULL,
  `more` text DEFAULT NULL,
  `contact` text NOT NULL,
  `content` text NOT NULL,
  `secret_key` text NOT NULL,
  `picture` text NOT NULL,
  `timestamp` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `course_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `student_id` varchar(255) NOT NULL,
  `years` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `expect` varchar(255) NOT NULL,
  `timestamp` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
