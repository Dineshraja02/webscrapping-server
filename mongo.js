const { MongoClient } = require("mongodb");

let MONGODB_URL =
"mongodb+srv://dinesh:FnY8MOvdMKBxRRJh@onlineshopping.g9vjw.mongodb.net/onlineshopping?retryWrites=true&w=majority";
let MONGODB_NAME = "web-scrapping";

let client = new MongoClient(MONGODB_URL);
let mongo = {
  db: null,
  products: null,
  async connect() {
    try {
      await client.connect();
      this.db = client.db(MONGODB_NAME);
      this.products = this.db.collection("products");
      console.log("Selected Database:-", MONGODB_NAME);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = mongo;
