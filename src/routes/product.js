const express = require("express");
const router = express.Router();
const {
  getProductsController,
  getProductController,
  addProductController,
  updateProductController,
} = require("../controllers/product.controllers");
// const { errorHandler } = require("../helpers/error-handler");
const isAuthenticated = require("../middleware/auth");

router.get("/product", getProductsController);
router.get("/product/:productId", isAuthenticated, getProductController);
router.post("/product", addProductController);
router.put("/product/:productId", updateProductController);

module.exports = router;
