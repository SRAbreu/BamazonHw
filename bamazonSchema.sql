
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;
-- creating table & columns--
CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_qty INT NOT NULL default 0,
  PRIMARY KEY (item_id)
);
--inserting initial data into the table--
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('Silk Shirt', 'Apparel Women' , 45.50, 15);
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('Sundress', 'Apparel Women' , 25.00 , 50);
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('Laptop', 'Computers' , 800.00 , 50);
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('T-Shirt', 'Apparel Men' , 20.00 , 25);
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('Pillow', 'Bedding', 15, 30);
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('Bed Set', 'Bedding', 1200, 6);
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('Tv', 'Entertainment', 500, 10);
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('Chair', 'Furniture', 50, 20);
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('Love Seat', 'Furniture', 75.50, 20);
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('Coffe Table', 'Furniture', 100, 10);
INSERT INTO products (product_name, department_name, price, stock_qty )
VALUES ('Sweater', 'Apparel Men' , 25.00 , 25);

SELECT * FROM products;

-- UPDATE bamazon_DB . products SET stock_qty = .. WHERE item_id = 1;
