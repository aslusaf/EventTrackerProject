-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema flightsdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `flightsdb` ;

-- -----------------------------------------------------
-- Schema flightsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `flightsdb` DEFAULT CHARACTER SET utf8 ;
USE `flightsdb` ;

-- -----------------------------------------------------
-- Table `flight`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `flight` ;

CREATE TABLE IF NOT EXISTS `flight` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `flight_date` DATE NOT NULL,
  `aircraft_type` VARCHAR(45) NULL,
  `aircraft_identifier` VARCHAR(45) NOT NULL,
  `aircraft_name` VARCHAR(45) NULL,
  `departing_airport_identifier` VARCHAR(4) NOT NULL,
  `departing_airport_name` VARCHAR(45) NULL,
  `arriving_airport_identifier` VARCHAR(4) NOT NULL,
  `arriving_airport_name` VARCHAR(45) NULL,
  `distance_flown` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  `flight_type` VARCHAR(10) NULL,
  `day_takeoffs` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `night_takeoffs` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `day_landings` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `night_landings` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `instrument_approaches` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `single_engine` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `multi_engine` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `pilot_in_command` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `second_in_command` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `dual_received` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `instructor_examiner_checkpilot` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `technically_advanced_aircraft` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `cross_country` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `night` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `actual_instrument` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `simulated_instrument` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `simulator_time` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `total_duration` DECIMAL(4,1) UNSIGNED NOT NULL DEFAULT 0.0,
  `remarks` TEXT NULL,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS flightuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'flightuser'@'localhost' IDENTIFIED BY 'flightuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'flightuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `flight`
-- -----------------------------------------------------
START TRANSACTION;
USE `flightsdb`;
INSERT INTO `flight` (`id`, `flight_date`, `aircraft_type`, `aircraft_identifier`, `aircraft_name`, `departing_airport_identifier`, `departing_airport_name`, `arriving_airport_identifier`, `arriving_airport_name`, `distance_flown`, `flight_type`, `day_takeoffs`, `night_takeoffs`, `day_landings`, `night_landings`, `instrument_approaches`, `single_engine`, `multi_engine`, `pilot_in_command`, `second_in_command`, `dual_received`, `instructor_examiner_checkpilot`, `technically_advanced_aircraft`, `cross_country`, `night`, `actual_instrument`, `simulated_instrument`, `simulator_time`, `total_duration`, `remarks`, `created`, `updated`) VALUES (1, '2018-10-15', 'Redbird', 'X-2', NULL, 'ERAU', NULL, 'ERAU', NULL, 0, 'SIM', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.5, DEFAULT, 'Redbird Trainer', DEFAULT, DEFAULT);
INSERT INTO `flight` (`id`, `flight_date`, `aircraft_type`, `aircraft_identifier`, `aircraft_name`, `departing_airport_identifier`, `departing_airport_name`, `arriving_airport_identifier`, `arriving_airport_name`, `distance_flown`, `flight_type`, `day_takeoffs`, `night_takeoffs`, `day_landings`, `night_landings`, `instrument_approaches`, `single_engine`, `multi_engine`, `pilot_in_command`, `second_in_command`, `dual_received`, `instructor_examiner_checkpilot`, `technically_advanced_aircraft`, `cross_country`, `night`, `actual_instrument`, `simulated_instrument`, `simulator_time`, `total_duration`, `remarks`, `created`, `updated`) VALUES (2, '2019-03-31', 'C172NAVIII', 'N455ER', 'Cessna 172 SP', 'KDAB', 'Daytona Beach International Airport', 'KOMN', 'Ormond Beach Airport', 40, 'VFR', 0, 8, DEFAULT, 8, DEFAULT, 2.2, DEFAULT, DEFAULT, DEFAULT, 2.2, DEFAULT, DEFAULT, DEFAULT, 2.2, DEFAULT, 0.4, DEFAULT, 2.2, 'M32 FLTN15', DEFAULT, DEFAULT);
INSERT INTO `flight` (`id`, `flight_date`, `aircraft_type`, `aircraft_identifier`, `aircraft_name`, `departing_airport_identifier`, `departing_airport_name`, `arriving_airport_identifier`, `arriving_airport_name`, `distance_flown`, `flight_type`, `day_takeoffs`, `night_takeoffs`, `day_landings`, `night_landings`, `instrument_approaches`, `single_engine`, `multi_engine`, `pilot_in_command`, `second_in_command`, `dual_received`, `instructor_examiner_checkpilot`, `technically_advanced_aircraft`, `cross_country`, `night`, `actual_instrument`, `simulated_instrument`, `simulator_time`, `total_duration`, `remarks`, `created`, `updated`) VALUES (3, '2019-04-04', 'C172NAVIII', 'N482ER', 'Cessna 172 SP', 'KDAB', 'Daytona Beach International Airport', 'KMLB', 'Melbourne Airport', 127, 'VFR', 2, DEFAULT, 2, DEFAULT, DEFAULT, 2.3, DEFAULT, DEFAULT, DEFAULT, 2.3, DEFAULT, DEFAULT, 2.3, DEFAULT, DEFAULT, 1.0, DEFAULT, 2.3, 'M36 FLT18', DEFAULT, DEFAULT);
INSERT INTO `flight` (`id`, `flight_date`, `aircraft_type`, `aircraft_identifier`, `aircraft_name`, `departing_airport_identifier`, `departing_airport_name`, `arriving_airport_identifier`, `arriving_airport_name`, `distance_flown`, `flight_type`, `day_takeoffs`, `night_takeoffs`, `day_landings`, `night_landings`, `instrument_approaches`, `single_engine`, `multi_engine`, `pilot_in_command`, `second_in_command`, `dual_received`, `instructor_examiner_checkpilot`, `technically_advanced_aircraft`, `cross_country`, `night`, `actual_instrument`, `simulated_instrument`, `simulator_time`, `total_duration`, `remarks`, `created`, `updated`) VALUES (4, '2019-11-25', 'C172NAVIII', 'N472ER', 'Cessna 172 SP', 'KDAB', 'Daytona Beach International Airport', 'KGNV', 'Gainesville Airport', 98, 'IFR', 1, 1, DEFAULT, 2, 4, 3.1, DEFAULT, 3.1, DEFAULT, 3.1, DEFAULT, DEFAULT, 3.1, 2.8, DEFAULT, 2.7, DEFAULT, 3.1, 'M33 FLT10', DEFAULT, DEFAULT);
INSERT INTO `flight` (`id`, `flight_date`, `aircraft_type`, `aircraft_identifier`, `aircraft_name`, `departing_airport_identifier`, `departing_airport_name`, `arriving_airport_identifier`, `arriving_airport_name`, `distance_flown`, `flight_type`, `day_takeoffs`, `night_takeoffs`, `day_landings`, `night_landings`, `instrument_approaches`, `single_engine`, `multi_engine`, `pilot_in_command`, `second_in_command`, `dual_received`, `instructor_examiner_checkpilot`, `technically_advanced_aircraft`, `cross_country`, `night`, `actual_instrument`, `simulated_instrument`, `simulator_time`, `total_duration`, `remarks`, `created`, `updated`) VALUES (5, '2020-01-09', 'C172NAVIII', 'N412ER', 'Cessna 172 SP', 'KDAB', 'Daytona Beach International Airport', 'KDAB', 'Daytona Beach International Airport', 75, 'VFR', 2, DEFAULT, 2, DEFAULT, DEFAULT, 2.7, DEFAULT, 2.7, DEFAULT, 2.7, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 2.7, 'M08 FLT07', DEFAULT, DEFAULT);
INSERT INTO `flight` (`id`, `flight_date`, `aircraft_type`, `aircraft_identifier`, `aircraft_name`, `departing_airport_identifier`, `departing_airport_name`, `arriving_airport_identifier`, `arriving_airport_name`, `distance_flown`, `flight_type`, `day_takeoffs`, `night_takeoffs`, `day_landings`, `night_landings`, `instrument_approaches`, `single_engine`, `multi_engine`, `pilot_in_command`, `second_in_command`, `dual_received`, `instructor_examiner_checkpilot`, `technically_advanced_aircraft`, `cross_country`, `night`, `actual_instrument`, `simulated_instrument`, `simulator_time`, `total_duration`, `remarks`, `created`, `updated`) VALUES (6, '2020-01-22', 'C172NAVIII', 'N404ER', 'Cessna 172 SP', 'KDAB', 'Daytona Beach International Airport', 'KGNV', 'Gainesville Airport', 98, 'VFR', 0, 3, DEFAULT, 3, DEFAULT, 3.2, DEFAULT, 3.2, DEFAULT, 3.2, DEFAULT, DEFAULT, DEFAULT, 0.4, DEFAULT, DEFAULT, DEFAULT, 3.2, 'M11 FLT08', DEFAULT, DEFAULT);
INSERT INTO `flight` (`id`, `flight_date`, `aircraft_type`, `aircraft_identifier`, `aircraft_name`, `departing_airport_identifier`, `departing_airport_name`, `arriving_airport_identifier`, `arriving_airport_name`, `distance_flown`, `flight_type`, `day_takeoffs`, `night_takeoffs`, `day_landings`, `night_landings`, `instrument_approaches`, `single_engine`, `multi_engine`, `pilot_in_command`, `second_in_command`, `dual_received`, `instructor_examiner_checkpilot`, `technically_advanced_aircraft`, `cross_country`, `night`, `actual_instrument`, `simulated_instrument`, `simulator_time`, `total_duration`, `remarks`, `created`, `updated`) VALUES (7, '2020-11-19', 'DA42', 'N135ER', 'Diamond DA42-VI', 'KDAB', 'Daytona Beach International Airport', 'KDAB', 'Daytona Beach International Airport', 45, 'VFR', 1, DEFAULT, 1, DEFAULT, 1, DEFAULT, 1.8, DEFAULT, DEFAULT, 1.8, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.2, 0.3, DEFAULT, 1.8, 'U05 FLT02', DEFAULT, DEFAULT);

COMMIT;

