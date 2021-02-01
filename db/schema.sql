DROP DATABASE IF EXISTS sell_ap_db;

CREATE DATABASE sell_ap_db;

USE sell_ap_db;

CREATE TABLE products(
  id INT PRIMARY KEY AUTO_INCREMENT,
  customer_reviews_avg FLOAT,
  customer_review_count INT,
  product_image VARCHAR(255),
  product_name VARCHAR(255),
  regular_price FLOAT,
  short_desc VARCHAR(255),
  thumbnail_img VARCHAR(255),
  product_url VARCHAR(255),
);

INSERT INTO products(customer_reviews_avg, customer_review_count, product_image, product_name, regular_price, short_desc, thumbnail_img, product_url) VALUES (4.2,65,'https://i.ebayimg.com/images/g/qMIAAOSw7Rde3JnI/s-l500.jpg','Nokia N-Gage',399.99,'Original Nokia N-gage with Original Box and plastic insert, Sonic, Moto GP, Tomb Raider, 128mb sim card','https://i.ebayimg.com/images/g/qMIAAOSw7Rde3JnI/s-l64.jpg','https://ebay.to/3iuYUcT');
