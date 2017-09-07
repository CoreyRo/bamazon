var SQL = function(host, user, pass, port, db)
{
    this.host = host;
    this.user = user;
    this.pass = pass;
    this.port = port;
    this.db = db;
    //Must npm install mysql
    var mysql = require('mysql');
    //Create Connection
    var con = mysql.createConnection(
    {
        host: this.host,
        user: this.user,
        password: this.pass,
        port: this.port,
        database: this.db
    });
    //Test to see if connection works
    this.IsConnected = function()
    {
        con.connect(function(err) 
        {
            if (err) throw err;
            return console.log("\nConnected!");
        });
    };
    //pass in a name of a table you wish to create
    this.Get = function(tableName)
    {
        return new Promise(function(resolve, reject)
        {
            con.query('SELECT * FROM ' + tableName, function(err,rows)
            {
                if(err) reject(err);
                resolve(rows);
                
            })
        })  
    };
    //Add data into a table, data is an object
    this.Insert = function(tableName, data)
    {
        return new Promise(function(resolve, reject)
        {
            var query = con.query("INSERT INTO " + tableName + " SET ?", data,
            function(err, res) 
            {
                // con.end();
            });
        })
    };
    //Delete data from a table, data is an object
    this.Delete = function(tableName, data)
    {
        return new Promise(function(resolve, reject)
        {
            con.query(
                "DELETE FROM " + tableName + " WHERE ?",
                data,
                function(err, res) 
                {
                  if(err) throw err;
                //   con.end();
                }
              );
        });
    };
    //Create a database
    this.CreateDb = function(dbName)
    {
        return new Promise(function(resolve, reject)
        {
            con.query("CREATE DATABASE " + dbName + " ?",
            function(err, res)
            {
                if(err) throw err;
                // con.end();
            })
        });
    }
    //Table variables must be a string, does not need to be in ()
    this.CreateTable = function(tableName, tableVariables)
    {
        return new Promise(function(resolve, reject)
        {
            con.query("CREATE TABLE " + tableName + "VALUES ("+tableVariables+")",
            function(err, res)
            {
                if(err) throw err;
                // con.end();
            })
        });
    };
    //Select data from a specific cell
    this.FilteredSelect = function(tableName, tableVariables)
    {
        return new Promise(function(resolve, reject)
        {
            con.query("SELECT * FROM " + tableName + " WHERE " + tableVariables,
            function(err, res)
            {
                if(err) reject(err);
                resolve(res);
                // con.end();
            })
        });
    };
    //Set is an object of the data to set to and where is the object of where that data is
    this.Update = function(tableName, set, where)
    {
        var temp = [];
        temp.push(set);
        temp.push(where);
        return new Promise(function(resolve, reject)
        {
            var query = con.query("UPDATE " + tableName + " SET ? WHERE ?",
            temp,
            function(err, res) 
            {
                if(err) throw err;
                // console.log(query.sql)
            //  con.end();
            })
        });
    };
    this.quitApp = function(){
        con.end();
    }
}
module.exports = SQL;