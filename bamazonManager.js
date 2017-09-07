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

function mgrMain(database) {
	inquirer
		.prompt([{
			type: "rawlist",
			message: "What do you want to do?\n",
			name: "action",
			choices: [
				"View Products",
				"View Low Inventory"
			]
		}])
		.then(function(answers) {
			switch (answers.action) {
				case "View Products":
					showInv(database);
					break;
				case "View Low Inventory":
					lowInv(database);
					break;
			}

		});
}

function showInv(database) {
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
				tableArr.push(resultObj);
			}
			console.table(tableArr);
			inquirer
				.prompt([{
					type: "rawlist",
					message: "What do you want to do?\n",
					name: "myAction",
					choices: [
						"Add Inventory",
						"Add New Item"
					]
				}]).then(function(answers) {
					switch (answers.myAction) {
						case "Add Inventory":
							invID(database);
							break;
						case "Add New Item":
							newItem(database);
							break;
					}
				})
		})

}

function lowInv(database) {
	inquirer.prompt([{
		type: "input",
		message: "Enter the inventory level to sort by.\n",
		name: "invLvl"
	}]).then(function(answers) {
		if (isNaN(answers.invLvl) || answers.invLvl === "") {
			console.log("Error: Please enter a valid number\n");
			lowInv(database);
		}
		else {

			database.FilteredSelect("products", "stock_qty < " + answers.invLvl)
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

					invID(database, products);
				});
		}

	})
}

function invID(database) {
	database.Get("products").then(function(products) {
		inquirer
			.prompt([{
				type: "input",
				message: "Enter the Item ID of the product you want to add inventory to.\n",
				name: "invID"
			}]).then(function(answers) {
				if (isNaN(answers.invID) || answers.invID === "" || answers.invID > (products.length)) {
					console.log("Error: Please enter a valid number\n");
					invID(database);
				}
				else {

					var id = answers.invID;
					addInv(id, database)
				}

			});
	})

}

function addInv(id, database) {
	database.Get("products").then(function(products) {
		var dbItem = [];

		for (var i = 0; i < products.length; i++) {
			if (parseInt(id) === parseInt(products[i].item_id)) {
				dbItem.push(products[i]);
			};
		};
		howMany(dbItem[0], products, database);
	});
};

function howMany(dbItem, products, db) {
	console.log("You've picked " + dbItem.product_name + ".\nThere are " + dbItem.stock_qty + " left.\n")
	inquirer
		.prompt([{
			type: "input",
			message: "How much inventory of " + dbItem.product_name + " do you want to add.\n",
			name: "invQty"
		}]).then(function(answers) {
			var invQty = answers.invQty;

			var updateQty = parseInt(dbItem.stock_qty) + parseInt(invQty);

			database.Update("products", {
				stock_qty: updateQty
			}, {
				item_id: dbItem.item_id
			});
			console.log("\nYou've successfully added " + invQty + " of " + dbItem.product_name + ".\n");
			inquirer.prompt([{
					type: "rawlist",
					message: "What would you like to do next?\n",
					name: "nextAction",
					choices: [
						"Back to Menu",
						"Exit"
					]
				}])
				.then(function(answers) {
					console.log(answers.nextAction);
					switch (answers.nextAction) {
						case "Back to Menu":
							mgrMain(database);
							break;
						case "Exit":
							database.quitApp();
							break;
					}
				})

		});

};

function newItem(database) {
	console.log("NewItem")
	database.Get("products").then(function(products) {
		var arr = [];
		for (var i = 0; i < products.length; i++) {
			arr.push(products[i].dept_name);
		}
		var deptArr = arr.filter(function(item, index, inputArray) {
			return inputArray.indexOf(item) == index;
		})

		inquirer
			.prompt([{
					type: "rawlist",
					message: "Select the department",
					name: "dept_name",
					choices: deptArr
				},
				{
					type: "input",
					message: "Enter the name of the product.",
					name: "prod_name"
				},
				{
					type: "input",
					message: "Enter the customer price of the item.",
					name: "cust_price"
				},
				{
					type: "input",
					message: "Enter the inventory amount.",
					name: "stock_qty"
				}

			]).then(function(answers) {
				if (isNaN(answers.cust_price) && isNaN(answers.stock_qty)) {
					console.log("Error: Please enter a valid number for Inventory Amount, or Customer Price\n");
					newItem(database);
				}
				else {
					database.Insert("products", {
						product_name: answers.prod_name,
						dept_name: answers.dept_name,
						cust_price: parseFloat(answers.cust_price),
						stock_qty: parseInt(answers.stock_qty)
					})
					console.log("\nYou've succesfully added " + answers.stock_qty + " " + answers.prod_name + "(s) at $" + answers.cust_price + " in the " + answers.dept_name + " department.");
					database.quitApp();
				}

			})
	})

}

mgrMain(database);