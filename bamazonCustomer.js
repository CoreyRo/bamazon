//Bamazon Customer Level
//By Corey Rodems
//This file is the customer level of access to the bamazon_db.
//Customer level allows viewing the database invetory and purchasing.
var SQL = require("./sqlFile.js");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

//Insert your MySQL config.
//var db = new SQL(HOST,USER,PASS,PORT,DATABSE)
//Replace dbConfig.X with your SQL settings
var dbConfig = require("./dbSettings");
var database = new SQL(dbConfig.HOST, dbConfig.USER, dbConfig.PASS, dbConfig.PORT, dbConfig.DB);


//Starts the store and displays the database inventory
function startStore() {
    inquirer
        .prompt([{
            type: "confirm",
            message: "\nWould you like to see our wares?\n",
            name: "initConfirm",
            default: true
        }])
        .then(function(answers) {
            if (answers.initConfirm) {
                makeTable(database);
                database.Get("products")
                    .then(function(products) {
                        buyItems(products)
                    });
            }
            else {
                database.quitApp();
            }

        });

}

//Takes user input and compares that to the database item id's
function buyItems(products) {
    inquirer
        .prompt([{
                type: "input",
                message: "Enter the Item ID of the product you want to purchase.\n",
                name: "buyID"
            },
            {
                type: "confirm",
                message: "Are you sure?",
                name: "confirm",
                default: true
            }
        ]).then(function(answers) {
            if (answers.confirm) {
                database.Get("products")
                    .then(function(products) {

                        var dbItem = [];
                        for (var i = 0; i < products.length; i++) {
                            if (parseInt(answers.buyID) === parseInt(products[i].item_id)) {
                                dbItem.push(products[i]);
                            };
                        };
                        itemQty(dbItem[0], products, answers.buyID);

                    });

            };
        });
};

//compares user buy qty to the database inventory.
//if database inventory is greater than user buy qty, the database updates to reflect the purchases
function itemQty(dbItem, products, buyID) {
    console.log("\nYou've picked " + dbItem.product_name + ".\nThere are " + dbItem.stock_qty + " left.\n")
    inquirer
        .prompt([{
            type: "input",
            message: "Enter the quantity of " + dbItem.product_name + " you want to buy.",
            name: "buyQty"
        }]).then(function(answers) {
            var buyQty = answers.buyQty;
            var sales = dbItem.sales;
            var price = dbItem.cust_price;
            inquirer
                .prompt([{
                    type: "confirm",
                    message: "Are you sure you want to buy " + buyQty + " of " + dbItem.product_name + "?",
                    name: "confirm",
                    default: true
                }]).then(function(answers) {

                    if (answers.confirm) {
                        var updateQty = parseInt(dbItem.stock_qty) - parseInt(buyQty);
                        sales += (price * buyQty);
                        if (parseInt(buyQty) < parseInt(dbItem.stock_qty)) {
                            database.Update("products", {
                                stock_qty: updateQty,
                                sales: sales
                            }, {
                                item_id: dbItem.item_id
                            });
                            console.log("\nYou've successfully purchased " + buyQty + " of " + dbItem.product_name + ".\n");
                            inquirer.prompt([{
                                    type: "list",
                                    message: "What would you like to do next?\n",
                                    name: "nextAction",
                                    choices: [
                                        "Keep Shopping",
                                        "Exit"
                                    ]
                                }])
                                .then(function(answers) {
                                    console.log(answers.nextAction);
                                    switch (answers.nextAction) {
                                        case "Keep Shopping":
                                            startStore();
                                            break;
                                        case "Exit":
                                            database.quitApp();
                                            break;
                                    }
                                })
                        }
                        else {
                            console.log("Not enough inventory! \nThere are only " + dbItem.stock_qty + " left.\n");
                            database.quitApp();
                        };
                    };
                });
        });

};

//Uses the console.table node module to make a table in the terminal
function makeTable(database) {
    database.Get("products")
        .then(function(products) {
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
        })
}
//starts node app
startStore();