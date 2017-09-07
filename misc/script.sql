/*Test Data*/
drop database if exists bamazon_db;
create database bamazon_db;

use bamazon_db;

CREATE TABLE products (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(101) NOT NULL,
    dept_name VARCHAR(101) NOT NULL,
    cust_price FLOAT(11) NOT NULL,
    stock_qty INTEGER(10) NOT NULL,
    sales float(11),
    PRIMARY KEY (item_id)
);

CREATE TABLE depts (
    dept_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR(101) ,
    over_head_costs FLOAT(10),
    product_sales float(10),
    total_profit float(10),
    PRIMARY KEY (dept_id)
);

/*Test Values*/
INSERT INTO products (product_name, dept_name, cust_price, stock_qty) 
VALUES 
('Gaming Mouse', 'Electronics', 59.99, 800),
('24" IPS Monitor', 'Electronics', 229.99, 125),
('Golden Toaster', 'Appliances', 4999.99, 10),
('40lb Dog Food', 'Pet Supplies', 54.99, 500),
('Rubber Chew Toy', 'Pet Supplies', 9.99, 900),
('Microwave', 'Appliances', 34.99, 320),
('Food Processor', 'Appliances', 79.99, 550),
('75" TV', 'Electronics', 799.99, 255),
('Patio Umbrella', 'Outdoor/Garden', 124.99, 175),
('Deck Chair', 'Outdoor/Garden', 34.99, 400);

SELECT 
    products.dept_name, SUM(products.sales) AS total_sales
FROM
    products
        LEFT JOIN
    depts ON products.dept_name = depts.dept_name
GROUP BY dept_name
order by total_sales;