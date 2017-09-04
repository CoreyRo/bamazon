/*Test Data*/
drop database if exists bamazon_db;
create database bamazon_db;

use bamazon_db;

CREATE TABLE products (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(101) NOT NULL,
    dept_name VARCHAR(101) NOT NULL,
    cust_price INTEGER(10) NOT NULL,
    stock_qty INTEGER(10) NOT NULL,
    PRIMARY KEY (item_id)
);

CREATE TABLE depts (
    dept_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR(101) NOT NULL,
    over_head_costs INTEGER(10) NOT NULL,
    PRIMARY KEY (dept_id)
);

/*Test Values*/
INSERT INTO products (product_name, dept_name, cust_price, stock_qty) 
VALUES 
('Gaming Mouse', 'Electronics', 60, 800),
('24" IPS Monitor', 'Electronics', 200, 125),
('Golden Toaster', 'Appliances', 5000, 10),
('40lb Dog Food', 'Pet Supplies', 65, 500),
('Rubber Chew Toy', 'Pet Supplies', 8, 900),
('Microwave', 'Appliances', 35, 320),
('Food Processor', 'Appliances', 80, 550),
('75" TV', 'Electronics', 600, 255),
('Patio Umbrella', 'Outdoor/Garden', 125, 175),
('Deck Chair', 'Outdoor/Garden', 40, 400);

