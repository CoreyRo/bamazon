var SQL = require("./sqlFile.js");
var inquierer = require("inquirer");
var consoleTable = require("console.table");
var dbSettings = require("./dbSettings");
var db = new SQL(dbSettings.HOST, dbSettings.USER, dbSettings.PASS, dbSettings.PORT, "bamazon_db")
console.log(dbSettings.HOST)
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
        
    })