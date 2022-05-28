const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  street: { type: String, required: true },
  apartment: { type: String, default: "" },
  city: { type: String, required: true },
  zipCode: { type: String, default: "" },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const USer = model("User", userSchema);

module.exports = User;
