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
        console.log("connected as id " + connection.threadId + "\n");
        readProducts();
    });

    function readProducts() {
        connection.query("SELECT id FROM products", function(err, res) {
            if (err) throw err;

            // Log results of the SELECT statement
            console.log(res);
            connection.end();
        })
    }

    function runSearch() {
        inquirer.prompt({
            name: "choose",
            type: "list",
            message: "What is the ID of the product you would like to buy?",
            choices: ["1" , "2", "3", "4", "5", "6", "7" , "8" , "9" , "10"]
        })
    }