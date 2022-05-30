const mongoose = require("mongoose");
require("dotenv").config();

// Connect MongoDB at default port 27017.
const dbConnection = (uri) =>
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("MongoDB Connection Succeeded.");
      } else {
        console.log("Error in DB connection: " + err);
      }
    }
  );

module.exports = { dbConnection };
