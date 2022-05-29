const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: { type: String, required: true },
  color: { type: String },
  icon: { type: String },
  image: { type: String },
});

const Category = model("Category", categorySchema);

module.exports = Category;
