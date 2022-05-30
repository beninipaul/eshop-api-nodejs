const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
} = require("../services/product.services");

const getProductsController = async (req, res) => {
  let filter = {};
  try {
    if (req.query) {
      filter = req.query;
    }
    const products = await getProducts(filter);
    if (products.length === 0)
      return res.json({
        status: 204,
        success: false,
        message: "Not found.",
        products,
      });

    return res.json({
      status: 200,
      success: true,
      message: "Found.",
      products,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const getProductController = async (req, res) => {
  try {
    const product = await getProduct(req.params.productId);
    if (product.length === 0)
      return res.json({
        status: 204,
        success: false,
        message: "Not found.",
        product,
      });

    return res.json({
      status: 200,
      success: true,
      message: "Found.",
      product,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const addProductController = async (req, res) => {
  try {
    const product = {
      name: req.body.name,
      description: req.body.description,
      richDescription: req.body.richDescription,
      image: req.body.image,
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
      dateCreated: Date.now(),
    };

    const productSaved = await addProduct(product);
    if (productSaved.length === 0)
      return res.json({
        status: 204,
        success: false,
        message: "Not found.",
        productSaved,
      });

    return res.json({
      status: 200,
      success: true,
      message: "Saved.",
      productSaved,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

const updateProductController = async (req, res) => {
  try {
    const product = {
      name: req.body.name,
      description: req.body.description,
      richDescription: req.body.richDescription,
      image: req.body.image,
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
    };

    const productUpdated = await updateProduct(req.params.productId, product);
    if (productUpdated.length === 0)
      return res.json({
        status: 204,
        success: false,
        message: "Not found.",
        productUpdated,
      });

    return res.json({
      status: 200,
      success: true,
      message: "Updated.",
      productUpdated,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

module.exports = {
  getProductsController,
  getProductController,
  addProductController,
  updateProductController,
};
