DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lipstick", "beauty", 7.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("scarf", "outerwear", 35, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shampoo", "haircare", 8.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", "electronics", 1250, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("popcorn", "snacks", 3.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("t-shirt", "womens clothing", 22.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gold ring", "jewelry", 500, 20);

SELECT * FROM products;