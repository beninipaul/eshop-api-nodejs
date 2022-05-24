const Category = require("../models/category");

exports.getCategories = async (filter) => {
  const categories = await Category.find(filter);
  return categories;
};

exports.getCategory = async (categoryId) => {
  const categories = await Category.findById(categoryId);
  return categories;
};

exports.addCategory = async (newCategory) => {
  const category = await new Category(newCategory).save();
  if (!category) {
    new Error("Can't not save this category");
  }

  return category;
};

exports.updateCategory = async (categoryId, category) => {
  const categoryUpdated = await Category.findByIdAndUpdate(
    categoryId,
    category,
    { new: true }
  );
  return categoryUpdated;
};
