# Bamazon

## Overview

For this activity, I created an Amazon-like storefront with MySQL. The app takes in orders from customers and depletes stock from the store's inventory. 

Requires creating a MySQL Database of your products and installing the MySQL and Inquirer packages to your files in order for functionality. 

## Customer View

1. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

2. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

3. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

4. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

5. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

6. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

## MySQL Table <br>
![MySQL Table](/images/mysql-screenshot.png)

## Node Screenshots <br>
![Node Screenshots](/images/node1-screenshot.png)
![Node Screenshots](/images/node2-screenshot.png)
![Node Screenshots](/images/node3-screenshot.png)

### Link
* https://helenmasch.github.io/bamazon/

### Contributor
Helen Maschmeyer - JavaScript, Node, MySQL, Inquirer