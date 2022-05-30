const User = require("../models/user");

exports.getUsers = async () => {
  const users = await User.find().select("-passwordHash");
  return users;
};

exports.getUser = async (userId) => {
  const user = await User.findById(userId).select("-passwordHash");
  return user;
};

exports.addUser = async (newUser) => {
  const user = await new User(newUser).save();
  return user;
};

exports.updateUser = async (userId, user) => {
  const userUpdated = await User.findByIdAndUpdate(userId, user, { new: true });
  return userUpdated;
};

exports.loginUser = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};
