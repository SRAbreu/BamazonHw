//requiring npm packages for the project
var mysql = require("mysql");
var inquirer = require("inquirer");

// create a SQL connection via node using server & database credentials
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // my username
  user: "root",
  password: "",
  database: "bamazon_DB"
});
// connecting to the database; creating a functions that runs "displayItems".
//This func has all the products from the table. Run the func after the connection is made.
connection.connect(function(err) {
  if (err) throw err;
  displayItems();
});
//display all the items available for sale
var displayItems = function(){
  var query = "SELECT * FROM products";
  connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
          console.log("Item ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price + " || Stock: " + res[i].stock_qty);
      }
      shoppingCart();
    })
};
//Users prompted with two questioons:
//1.the ID of the product they would like to buy
//2.how many untis they would like to buy
var shoppingCart = function() {
    inquirer.prompt([
      {
        name: "itemID",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
        //Validate: checks weather or not the user typed a response
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                console.log("\nPlease enter a valid product ID");
                return false;
            }
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units of this product you would like to buy?",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
      }
    ])
//When finished prompting:
.then(function(answer) {
//Check if store has enough quantity of the product to meet the customer's request.
//If not: "Insufficient quantity"
var query = 'SELECT * FROM products WHERE item_id=' + answer.itemID;
    connection.query(query, function(err, res) {
      console.log("res",res);
      console.log("answer.quantity: ",answer.quantity);
      console.log("res.stock_qty",res[0].stock_qty);
      if (answer.quantity <= res[0].stock_qty) {
          for (var i = 0; i < res.length; i++) {
          console.log("We currently have " + res[i].stock_qty + " " + res[i].product_name + ".");
          console.log("Thank you! Your order of "+ answer.quantity + " " + res[i].product_name + " is now being processed.");
// ??     // update the items
          var newQuantity = res[i].stock_qty - answer.quantity;
          function updateItem(answer.itemID,newQuantity) {
          var query = connection.query("UPDATE products SET ? WHERE ?",
          [{
            item_id = answer.itemID;
            },
          {
            stock_qty = answer.quantity;
            }
          ]
          function(err, res) {
          console.log(res.newQuantity + " product updated!\n");
          // Call updateItem AFTER the UPDATE completes
//          updateItem();
          }
        }
          updateItem();
        }
// ????
//if qty is less that the stock_qty
      } else {
          console.log("Sorry! We have insufficient quantity of this product in stock.");
          }
        //displayItems();
      })
    })
 };
//  //missing total cost of purchase????



//    // logs the actual query being run
//    console.log(query.sql);
