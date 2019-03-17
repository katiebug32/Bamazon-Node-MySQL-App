DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(12,2) NOT NULL,
stock_quantity INTEGER NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baseball Hat", "Clothing", 5.00, 5),
("Camera", "Electronics", 255.50, 5),
("Can Opener", "Kitchen", 10.00, 8),
("Purse", "Clothing", 45.00, 3),
("Paper Towels", "Household", 15.25, 15),
("Fancy Tie", "Clothing", 25.00, 5),
("Alarm System", "Electronics", 475.50, 4),
("Dog Food", "Pets", 8.00, 15),
("Cat Food", "Pets", 8.00, 10),
("Kitchen Towels", "Household", 10.00, 5),
("Nail Polish", "Personal Care", 4.50, 3),
("Toothpaste", "Personal Care", 3.50, 8);

SELECT * FROM products;