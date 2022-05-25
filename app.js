const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { dbConnection } = require("./databases/mongoose.db");
const categoryRoute = require("./src/routes/category");
const productRoute = require("./src/routes/product");
const exampleRoute = require("./src/routes/example");

require("dotenv").config();
const PORT = process.env.PORT || 5000;
const uri = process.env.DB_CONNECTION_STRING;

//setup middlewares
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

//example route
app.use("/api/v1", categoryRoute);
app.use("/api/v1", productRoute);

//connect to mongo database
dbConnection(uri);
//runs the server
app.listen(PORT, () => console.log("Server is running..."));
