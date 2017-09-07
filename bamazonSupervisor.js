//Bamazon Supervisor Level
//By Corey Rodems
//This file is the Supervisor level of access to the bamazon_db.
//Supervisor level allows viewing of total sales and adding new departments.
var SQL = require("./sqlFile.js");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

//Insert your MySQL config.
//var db = new SQL(HOST,USER,PASS,PORT,DATABSE)
//Replace dbConfig.X with your SQL settings
var dbConfig = require("./dbSettings");
var database = new SQL(dbConfig.HOST, dbConfig.USER, dbConfig.PASS, dbConfig.PORT, dbConfig.DB);