# Bamazon-Node-MySQL-App
Amazon-like "storefront" app will take in orders from customers and deplete stock from the store's inventory.

This is a command line app built using javascript, node.js, mysql database, and the inquirer.js node module.


MySQL / MySQL Workbench database:
![Screen Shot 2019-03-16 at 11 05 14 PM](https://user-images.githubusercontent.com/44386342/54485041-00cc3300-4840-11e9-891c-7e89531c8d34.png)

Spin up a local server to run Bamazon.

Shoppers will be shown all available products (pulled from database), then asked questions to build their order using the Inquirer module:
![Screen Shot 2019-03-16 at 9 53 15 PM](https://user-images.githubusercontent.com/44386342/54485007-7d124680-483f-11e9-9113-5f555ff171a5.png)


![Screen Shot 2019-03-16 at 9 53 43 PM](https://user-images.githubusercontent.com/44386342/54485008-80a5cd80-483f-11e9-8181-69cf0fe5a575.png)

The app will check if there is enough stock to fulfill the order. If not, the shopper will be alerted and prompts will start over. If there is enough stock, the order total will be displayed and oerder will be completed:
![Screen Shot 2019-03-16 at 9 54 02 PM](https://user-images.githubusercontent.com/44386342/54485010-88fe0880-483f-11e9-9942-96b0a6d387f4.png)


![Screen Shot 2019-03-16 at 9 54 20 PM](https://user-images.githubusercontent.com/44386342/54485011-8b606280-483f-11e9-839d-e808e1bf5a18.png)

The shopper will be asked if they would like to continue shopping. If so, the app will cycle back through each function (database display, prompts, etc.). If not, the database connection will end:
![Screen Shot 2019-03-16 at 9 54 50 PM](https://user-images.githubusercontent.com/44386342/54485014-90251680-483f-11e9-9404-0362819cb188.png)


![Screen Shot 2019-03-16 at 9 55 09 PM](https://user-images.githubusercontent.com/44386342/54485015-92877080-483f-11e9-95aa-d5cf9bfb42d9.png)
