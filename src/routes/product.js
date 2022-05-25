const express = require("express");
const router = express.Router();
const {
  getProductsController,
  getProductController,
  addProductController,
  updateProductController,
} = require("../controllers/product.controllers");

router.get("/product", getProductsController);
router.get("/product/:productId", getProductController);
router.post("/product", addProductController);
router.put("/product/:productId", updateProductController);

module.exports = router;
