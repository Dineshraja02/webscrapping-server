const { MongoClient } = require("mongodb");

let MONGODB_URL =
"mongodb+srv://dinesh:JZ2PTnbjqy9NKis1@cluster0.uykryiz.mongodb.net/?retryWrites=true&w=majority";
let MONGODB_NAME = "onlineshopping";

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
