// Establish a connection to the MongoDB instance
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "crudDB";

MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MongoDB");

    // Define the use function
    function use(dbName) {
      return client.db(dbName);
    }

    // Use the crudDB database
    const db = use(dbName);

    // Rest of your code here
    let a=db.courses.find({ price: 0 });
    console.log(a);
    // ...
  }
});
