# Bamazon
Mock Retail Data Nodejs App

Author: Corey Rodems


---
## Status
- #### WORK IN PROGRESS

### To Do
- [x] MySQL Database - **COMPLETE**
    - [x] Create DB and dbConfig.js
    - [x] Create tables and mock retal data
- [x] bamazonCustomer.js - **COMPLETE**
    - [x] Display database inventory to terminal in a table
    - [x] Chose database items with inquirer
    - [x] Update database based on user input
- [x] bamazonManager.js - **COMPLETE**
    - [x] View database inventory levels
    - [x] Sort items by low inventory
    - [x] Add new database products
    - [x] Update inventory levels
- [ ] bamazonSupervisor.js
    - [ ] View total sales by department (new db table)
    - [ ] Able to create new departments

---
<!-- TOC -->

- [Bamazon](#bamazon)
    - [Status](#status)
        - [To Do](#to-do)
    - [Tech/Framework Used](#techframework-used)
    - [Features](#features)
    - [Installation](#installation)
    - [API Reference](#api-reference)
    - [How to Use](#how-to-use)
        - [In a Nodejs Terminal:](#in-a-nodejs-terminal)
            - [Customer Level](#customer-level)
            - [Manager Level](#manager-level)
            - [Supervisor Level](#supervisor-level)
    - [Takeaways](#takeaways)
    - [Contributons](#contributons)
    - [License & Copyright](#license-copyright)

<!-- /TOC -->

---
## Tech/Framework Used
- [Nodejs](https://nodejs.org/en/ "Nodejs")
- [MySQL Workbench](https://www.mysql.com/products/workbench/ "MySQL Workbench")
- [Microsoft Visual Studio Code](https://code.visualstudio.com/ "Visual Studio Code")
- [MAMP](https://www.mamp.info/en/downloads/ "MAMP")

---
## Features
This is a Nodejs app that interacts with a MySQL database containing mock retail data.

Data displayed at the user level will be displayed in a table in the Node terminal.

![table image](http://i.imgur.com/7a7QILC.png)

- User Level
    - View inventory and "buy" mock products
- Manager Level
    - Add inventory
    - View Low Inventory
- Supervisor Level
    - View Sales by Department


---
## Installation
Source https://github.com/coreyro/bamazon.git


---
## API Reference

[![https://nodei.co/npm/mysql.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/mysql.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/mysql)

[![https://nodei.co/npm/inquirer.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/inquirer.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/inquirer)

[![https://nodei.co/npm/easy-table.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/easy-table.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/easy-table)

[![https://nodei.co/npm/console.table?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/console.table.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/console.table)


---

## How to Use
- Make sure you are in the right directory, then type "npm install --save" to install the required node modules.
- Use the script.sql file to create the bamazon_db and populate the tables in MySQL Wrokbench.
- Use MAMP and make sure your local server is running.
- On line 15 in bamazonCustomer.js, change the arguments to match your local database settings.
</br>

### In a Nodejs Terminal:

#### Customer Level
    node bamazonCustomer.js
 - Follow the prompts in the termianl to "buy" mock data

![Customer Level](http://i.imgur.com/O2HJXnT.gif "customerLevel")
<br>

#### Manager Level
    node bamazonManager.js
 - Follow the prompts in the terminal to add new items or update inventory counts

![Manager Level](http://i.imgur.com/4Ys3ZXp.gif "managerLevel")
<br>

#### Supervisor Level
    node bamazonSupervisor.js
 - Follow the prompts in the terminal to view sales data and create new departments

---

## Takeaways
I am still very green when it comes to writing code and interacting with Nodejs and MySQL so I had a lot of challenges working out how to code this.
I'm pretty sure I can refactor this at some point and make it a lot smaller and more optimized but I need more time to work it out. 
I plan to just have one JS file that you run in node that accesses the other JS files and serves them up with inquirer so that you don't
have to type "node bamazonSomeFile.js" to run different modes. I also want to add more error checking for inputs.

---

## Contributons
- [Steven Simon](https://github.com/theRealScoobaSteve "Steven Simon"), UCI Coding Bootcamp
    - [sqlFile.js](https://github.com/CoreyRo/bamazon/blob/master/sqlFile.js "SQL Object")

---

## License & Copyright
© Corey Rodems, UCI Coding Bootcamp 2017

---
- [GitHub Profile](https://www,github.com/coreyro)
- Email crodems@uci.edu

[![HitCount](https://hitt.herokuapp.com/CoreyRo/Flashcard-Generator.svg)](https://github.com/CoreyRo/bamazon)
