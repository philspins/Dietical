SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nourish`
--

CREATE DATABASE nourish;
USE nourish;

-- --------------------------------------------------------

--
-- Table structure for table `tblFoodItems`
--

CREATE TABLE `tblFoodItems` (
  `pkFoodID` int(11) NOT NULL,
  `Name` varchar(32) NOT NULL,
  `UOM` varchar(32) NOT NULL,
  `Weight` int(11) NOT NULL DEFAULT '0',
  `Calories` int(11) NOT NULL DEFAULT '0',
  `Protein` decimal(10,0) NOT NULL DEFAULT '0',
  `Carbs` decimal(10,0) NOT NULL DEFAULT '0',
  `Fat` decimal(10,0) NOT NULL DEFAULT '0',
  `Fibre` decimal(10,0) NOT NULL DEFAULT '0',
  `ImageURL` TEXT NULL DEFAULT NULL;
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tblIngredients`
--

CREATE TABLE `tblIngredients` (
  `pkIngredientID` int(11) NOT NULL,
  `fkRecipeID` int(11) NOT NULL,
  `fkFoodItemID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tblMeals`
--

CREATE TABLE `tblMeals` (
  `pkMealID` int(11) NOT NULL,
  `fkMealTypeID` int(11) NOT NULL,
  `Day` date NOT NULL,
  `fkUserID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tblRecipes`
--

CREATE TABLE `tblRecipes` (
  `pkRecipeID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `ImageURL` TEXT NULL DEFAULT NULL;
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tblRecipeTags`
--

CREATE TABLE `tblRecipeTags` (
  `pkRecipeTagID` int(11) NOT NULL,
  `fkRecipeID` int(11) NOT NULL,
  `fkTagID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tblTags`
--

CREATE TABLE `tblTags` (
  `pkTagID` int(11) NOT NULL,
  `Tag` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tblUsers`
--

CREATE TABLE `tblUsers` (
  `pkUserID` int(11) NOT NULL,
  `FirstName` int(11) NOT NULL,
  `LastName` int(11) NOT NULL,
  `Email` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblFoodItems`
--
ALTER TABLE `tblFoodItems`
  ADD PRIMARY KEY (`pkFoodID`),
  ADD KEY `FoodItem` (`Name`);

--
-- Indexes for table `tblIngredients`
--
ALTER TABLE `tblIngredients`
  ADD PRIMARY KEY (`pkIngredientID`);

--
-- Indexes for table `tblMeals`
--
ALTER TABLE `tblMeals`
  ADD PRIMARY KEY (`pkMealID`);

--
-- Indexes for table `tblRecipes`
--
ALTER TABLE `tblRecipes`
  ADD PRIMARY KEY (`pkRecipeID`),
  ADD UNIQUE KEY `Name` (`Name`),
  ADD KEY `RecipeName` (`Name`),
  ADD KEY `RecipeName_2` (`Name`);

--
-- Indexes for table `tblRecipeTags`
--
ALTER TABLE `tblRecipeTags`
  ADD PRIMARY KEY (`pkRecipeTagID`);

--
-- Indexes for table `tblTags`
--
ALTER TABLE `tblTags`
  ADD PRIMARY KEY (`pkTagID`);

--
-- Indexes for table `tblUsers`
--
ALTER TABLE `tblUsers`
  ADD PRIMARY KEY (`pkUserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblFoodItems`
--
ALTER TABLE `tblFoodItems`
  MODIFY `pkFoodID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblIngredients`
--
ALTER TABLE `tblIngredients`
  MODIFY `pkIngredientID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblMeals`
--
ALTER TABLE `tblMeals`
  MODIFY `pkMealID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblRecipes`
--
ALTER TABLE `tblRecipes`
  MODIFY `pkRecipeID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblRecipeTags`
--
ALTER TABLE `tblRecipeTags`
  MODIFY `pkRecipeTagID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblTags`
--
ALTER TABLE `tblTags`
  MODIFY `pkTagID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblUsers`
--
ALTER TABLE `tblUsers`
  MODIFY `pkUserID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblRecipes`
--
ALTER TABLE `tblRecipes`
  ADD CONSTRAINT `DeleteIngredients` FOREIGN KEY (`pkRecipeID`) REFERENCES `tblIngredients` (`pkIngredientID`) ON DELETE CASCADE,
  ADD CONSTRAINT `DeleteTags` FOREIGN KEY (`pkRecipeID`) REFERENCES `tblRecipeTags` (`pkRecipeTagID`) ON DELETE CASCADE;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
