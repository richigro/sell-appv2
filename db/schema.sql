DROP DATABASE IF EXIST sell_app_db;

CREATE DATABASE sell_app_db;

USE sell_app_db;

CREATE TABLE products(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  isAvailable VARCHAR(),
  
);

