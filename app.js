require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { dbConnection } = require("./config/mongoose.db");
const categoryRoute = require("./src/routes/category");
const productRoute = require("./src/routes/product");
const userRoute = require("./src/routes/user");
const { swaggerUI, specs } = require("./config/swaggerConfig");

const PORT = process.env.PORT || 5000;
const uri = process.env.DB_CONNECTION_STRING;

//*setup middleware
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

//*routes
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use("/api/v1", categoryRoute);
app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);

//*connect to mongo database
dbConnection(uri);
//*runs the server
app.listen(PORT, () => console.log("Server is running..."));
