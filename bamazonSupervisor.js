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