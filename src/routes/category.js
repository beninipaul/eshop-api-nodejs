const express = require("express");
const router = express.Router();
const {
  getCategoriesController,
  getCategoryController,
  addCategoryController,
  updateCategoryController,
} = require("../controllers/category.controllers");

router.get("/category", getCategoriesController);
router.get("/category/:categoryId", getCategoryController);
router.post("/category", addCategoryController);
router.put("/category/:categoryId", updateCategoryController);

module.exports = router;
