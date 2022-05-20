const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const exampleRoute = require("./src/routes/example");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//setup middlewares
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

//example route
app.use("/api/v1/", exampleRoute);

//runs the server
app.listen(PORT, () => console.log("Server is running..."));
