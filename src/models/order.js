const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  orderItems: [
    { type: Schema.Types.ObjectId, ref: "orderItem", require: true },
  ],
  shippingAddress1: { type: String, required: true },
  shippingAddress2: { type: String },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, default: "Pending", required: true },
  totalPrice: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  dateOrdered: { type: String, default: Date.now },
});

const Order = new model("Order", orderSchema);

module.exports = Order;
