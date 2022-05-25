const Product = require("../models/product");

exports.getProducts = async (filter) => {
  const product = await Product.find(filter).populate("category");
  return product;
};

exports.getProduct = async (productId) => {
  const product = await Product.findById(productId).populate("category");
  return product;
};

exports.addProduct = async (newProduct) => {
  const product = await Product(newProduct).save();
  if (!product) {
    return new Error("Cannot save this product");
  }
  return product;
};

exports.updateProduct = (productId, product) => {
  try {
    const updatedProduct = Product.findByIdAndUpdate(productId, product, {
      new: true,
    });
    return updatedProduct;
  } catch (error) {
    return new Error("Cannot update this product");
  }
};
