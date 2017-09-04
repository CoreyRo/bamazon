var SQL = require("./sqlFile.js");
var inquierer = require("inquirer");
var consoleTable = require("console.table");
var dbSettings = require("./dbSettings");

//Insert your MySQL config.
//var db = new SQL(HOST,USER,PASS,PORT,DATABSE)
//Replace dbSettings.X with your SQL settings
var database = new SQL("localhost", "root", "root", 3306, "bamazon_db");
database.IsConnected();
inquierer
    .prompt([
        {
            type: "confirm",
            message: "Would you like to see our wares?",
            name: "initConfirm",
            default: true
        }
    ])
    .then(function(answers){
        database.Get("products")
        .then(function(products){
            var tableArr = [];
            for (var i = 0; i < products.length; i++) {
                resultObj = {
                    "Item ID": products[i].item_id,
                    "Product": products[i].product_name,
                    "Department": products[i].dept_name,
                    "Price (USD)": " $ " + products[i].cust_price,
                    "Stock": products[i].stock_qty
                }
                tableArr.push(resultObj)
            }
            console.table(tableArr)

            database.quitApp();
        });
       
    })