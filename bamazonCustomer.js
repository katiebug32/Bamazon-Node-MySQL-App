const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '7fBhUTPbyH2y',
    database: 'bamazon'
});




//FUNCTIONS//

function displayShop() {
    connection.query("SELECT * FROM `products`", function(error, res){
        if (error) throw error;
        console.log("WELCOME TO BAMAZON!");
        // console.log(res);
        for(var i = 0; i < res.length; i++){
            
            console.log("ID: #" + res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price)
        }
        beginShopping();
    });
}

function beginShopping() {
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'item',
        message: 'What is the ID of the item you would like to buy?',
        },
        {
        type: 'input',
        name: 'quantity',
        message: 'How many would you like to buy?',
        }])
    .then(answers => {
        if (answers.item && answers.quantity) {
            console.log("Please hold while we update your cart.");
            console.log("////////////////////////////");
        }
        processOrder(answers.item, answers.quantity);
    });
}

function processOrder(item, quantity){
    
    connection.query("SELECT * FROM `products` WHERE `item_id` = ?", (item), function(error, res){
        if (error) throw error;
        if (res.length === 0) {
            console.log("Sorry, please input a valid product ID number and quantity.")
            beginShopping();
        }
        for(var i = 0; i < res.length; i++){
            console.log("YOUR CART: " + res[i].product_name + ", Price: $" + res[i].price + ", Qty: " + quantity)
            console.log("We are processing your order for " + quantity + " " + res[i].product_name + ".");
            console.log("////////////////////////")
            if(quantity <= res[i].stock_quantity){
                console.log("Your total amount due is: $" + (res[i].price * quantity));
                let newQTY = res[i].stock_quantity - quantity;
                // console.log("newQTY: " + newQTY)
                submitOrder(newQTY, item);
            } else {
                console.log("Insufficient quantity!")
                beginShopping();
            }
        }
    });
}

function submitOrder(newQTY, item){
    connection.query("UPDATE `products` SET ? WHERE ?", 
    [
        {stock_quantity: newQTY},
        {product_name: item}
    ]
        , function(error, res){
        if (error) throw error;
        console.log("Your order has been placed! Thank you for shopping at Bamazon!");
        console.log("/////////////////////////////////////")
        // console.log("Continue Shopping Below: ")
        //  write new function that asks if they want to continue shopping - if so, run start function again.
        continueShopping();
    }); 
}

function continueShopping () {
    inquirer
    .prompt([
        {
        type: 'confirm',
        name: 'continue',
        message: 'Would you like to continue shopping?',
        default: false
        }])
    .then(answers => {
        if (answers.continue) {
            displayShop();
        } else {
            console.log("Thank you for shopping Bamazon. Have a great day!")
            connection.end();
        }
    });

}


//KICK OFF PROGRAM WITH STARTING FUNCTION

displayShop();