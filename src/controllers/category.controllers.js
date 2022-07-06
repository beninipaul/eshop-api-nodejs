const {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
} = require("../services/category.services");

const getCategoriesController = async (req, res) => {
  let filter = {};
  try {
    if (req.query) {
      filter = req.query;
    }
    const categories = await getCategories(filter);

    if (categories.length === 0) {
      return res.json({
        status: 204,
        success: false,
        message: "Not found.",
        categories,
      });
    }

    return res.json({
      status: 200,
      success: true,
      message: "Found.",
      categories,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const getCategoryController = async (req, res) => {
  try {
    const category = await getCategory(req.params.categoryId);
    if (typeof category === "object" && category === null) {
      return res.json({
        status: 200,
        success: false,
        message: "Not found.",
        category,
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Found.",
      category,
    });
  } catch (error) {
    return res.status(500).json({ status: 500, success: false, error });
  }
};

const getCategoryByFilterController = async (req, res) => {
  const category = await getCategoryByFilter(req.query);
  try {
    if (category.length === 0) {
      return res.json({
        status: 204,
        success: false,
        message: "Not found.",
        category,
      });
    }

    return res.json({
      status: 200,
      success: true,
      message: "Found.",
      category,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const addCategoryController = async (req, res) => {
  const category = {
    name: req.body.name,
    color: req.body.color,
    icon: req.body.icon,
    image: req.body.image,
  };

  try {
    const savedCategory = await addCategory(category);
    return res.json({
      status: 201,
      success: true,
      message: "Category has been created.",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.name,
      error: error.errors.name.message,
    });
  }
};

const updateCategoryController = async (req, res) => {
  const category = {
    name: req.body.name,
    color: req.body.color,
    icon: req.body.icon,
    image: req.body.image,
  };

  try {
    const categoryUpdated = await updateCategory(
      req.params.categoryId,
      category
    );
    if (!categoryUpdated)
      return res.json({
        status: 204,
        success: false,
        message: "Not found.",
      });

    return res.json({
      status: 201,
      success: true,
      message: "Category was updated.",
      category: categoryUpdated,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.name,
      error: error.errors.name.message,
    });
  }
};
module.exports = {
  getCategoriesController,
  getCategoryController,
  addCategoryController,
  updateCategoryController,
};
