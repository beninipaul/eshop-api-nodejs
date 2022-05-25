const { Schema, model } = require("mongoose");

const productSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  richDescription: { type: String, default: "" },
  image: { type: String, required: true },
  images: [String],
  brand: String,
  price: Number,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  countInStock: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  dateCreated: { type: Date, default: Date.now },
});

const Product = model("Product", productSchema);

module.exports = Product;
