CREATE DATABASE tasksdb;

CREATE TABLE `tasksdb`.`movies` (
  id INT NOT NULL AUTO_INCREMENT,
  ReleaseYear VARCHAR(255),
  Title VARCHAR(255),
  Ethnicity VARCHAR(255),
  Director VARCHAR(255),
  Cast VARCHAR(255),
  Genre VARCHAR(255),
  WikiPage VARCHAR(255),
  Plot LONGTEXT,
  Primary Key (id)
);
