# Bamazon

<!-- TOC -->

- [Bamazon](#bamazon)
    - [Tech/Framework Used](#techframework-used)
    - [Features](#features)
    - [Installation](#installation)
    - [API Reference](#api-reference)
    - [Tests](#tests)
    - [How to Use](#how-to-use)
    - [License & Copyright](#license-copyright)

<!-- /TOC -->

---
## Tech/Framework Used
- [Nodejs](https://nodejs.org/en/ "Nodejs")
- [MySQL Workbench](https://www.mysql.com/products/workbench/ "MySQL Workbench")
- [Microsoft Visual Studio Code](https://code.visualstudio.com/ "Visual Studio Code")

---
## Features
This is a Nodejs app that interacts with a MySQL database containing mock retail data.

Data displayed at the user level will be displayed in a table in the Node terminal.

![alt-text](http://i.imgur.com/7a7QILC.png)

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
In a Nodejs Terminal:
- Make sure you are in the right directory, then type "npm install --save" to install the required node modules.
- Enter "node bamazonCustomer.js" for the Customer Level and follow the prompts.
- Enter "node bamazonManager.js" for the Manager Level and follow the prompts.
- Enter "node bamazonSupervisor.js" for the Supervisor Level and follow the prompts.

---
## License & Copyright
© Corey Rodems 2017

---
[![HitCount](https://hitt.herokuapp.com/CoreyRo/Flashcard-Generator.svg)](https://github.com/CoreyRo/bamazon)
