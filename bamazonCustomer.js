var SQL = require("./sqlFile.js");
var inquierer = require("inquirer");
var consoleTable = require("console.table");

//Insert your MySQL config.
//var db = new SQL(HOST,USER,PASS,PORT,DATABSE)
//Replace dbConfig.X with your SQL settings
var dbConfig = require("./dbSettings");
var database = new SQL(dbConfig.HOST, dbConfig.USER, dbConfig.PASS, dbConfig.PORT, dbConfig.DB);
database.IsConnected();
inquierer
	.prompt([{
		type: "confirm",
		message: "Would you like to see our wares?",
		name: "initConfirm",
		default: true
	}])
	.then(function(answers) {
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
				database.quitApp();
			});
	})