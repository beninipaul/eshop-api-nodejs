const { Schema, model } = require("mongoose");

const categorySchema = Schema({
  name: { type: String, required: true },
  color: { type: String },
  icon: { type: String },
  image: { type: String },
});

const Category = model(" Category", categorySchema);

module.exports = Category;
