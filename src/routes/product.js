const express = require("express");
const router = express.Router();
const {
  getProductsController,
  getProductController,
  addProductController,
  updateProductController,
} = require("../controllers/product.controllers");
// const { errorHandler } = require("../helpers/error-handler");
const {
  isAuthenticated,
  isAdminAuth,
  verifyToken,
} = require("../middleware/auth");

router.get("/product", getProductsController);
router.get("/product/:productId", getProductController);
router.post("/product", verifyToken, isAdminAuth, addProductController);
router.put("/product/:productId", updateProductController);

module.exports = router;
