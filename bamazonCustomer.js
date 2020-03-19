var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table")
var connection = mysql.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password123",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
});

function readProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        // Log results of the SELECT statement
        console.log(res);

        console.table(res)
      runSearch()
        // connection.end();
    })
}

function runSearch() {
    inquirer.prompt([{
        type: "input",
        message: "What is the ID of the product you would like to buy?",
        name: "itemID"
    },
        {
            type: "input",
            message: "How many units do you want to buy?",
            name: "units"
        }
    ]).then(function (data) {
        console.log(data)
        connection.query("SELECT * FROM products WHERE id ="+ data.itemID, function(err, results){
            console.table(results)
            var newQuantity = results[0].stock_quantity - data.units
            
            connection.query("UPDATE * SET products WHERE id ")

        })
    })
}