-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema my_diaries
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema my_diaries
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `my_diaries` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `my_diaries` ;

-- -----------------------------------------------------
-- Table `my_diaries`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `my_diaries`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `fullname` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `my_diaries`.`diary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `my_diaries`.`diary` (
  `iddiary` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`iddiary`),
  INDEX `fk_diary_users_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_diary_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `my_diaries`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
