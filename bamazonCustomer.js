var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // Your username
    user: "root",

    // Your password
  password: "password",
  database: "bamazon_DB"
    });

    connection.connect(function(err) {
        if (err) throw err;
        runSearch();
    });

    function runSearch() {
        inquirer
        .prompt({
            name: 
            type:
            message:
            choices:
        })
    }