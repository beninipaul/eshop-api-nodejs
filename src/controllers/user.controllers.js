const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  loginUser,
} = require("../services/user.services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsersController = async (req, res) => {
  const users = await getUsers();
  if (users.length === 0)
    return res.json({ status: 204, success: false, message: "Not found." });
  return res.json({ status: 200, success: true, users });
};

const getUserController = async (req, res) => {
  try {
    const user = await getUser(req.params.userId);
    if (user.length === 0)
      return res.json({ status: 204, success: false, message: "Not found." });
    return res.json({ status: 200, success: true, user });
  } catch (error) {
    new Error("Cannot find this user");
  }
};

const addUserController = async (req, res) => {
  try {
    let user = {
      name: req.body.name,
      email: req.body.email,
      passwordHash: req.body.passwordHash,
      street: req.body.street,
      apartment: req.body.apartment,
      city: req.body.city,
      zipCode: req.body.zipCode,
      country: req.body.country,
      phone: req.body.phone,
    };

    //Hashing password
    user.passwordHash = bcrypt.hashSync(user.passwordHash, 10);

    const userSaved = await addUser(user);
    if (userSaved.length === 0) {
      return res.json({
        status: 204,
        success: false,
        message: "Not found.",
        userSaved,
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: "Saved.",
      userSaved,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const updatedUserController = async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      street: req.body.street,
      apartment: req.body.apartment,
      city: req.body.city,
      zipCode: req.body.zipCode,
      country: req.body.country,
      phone: req.body.phone,
    };

    const userUpdated = await updateUser(req.params.userId, user);
    if (userUpdated.length === 0) {
      return res.json({
        status: 204,
        success: false,
        message: "Not found.",
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: "Updated.",
      userUpdated,
    });
  } catch (error) {}
};

const loginUserController = async (req, res) => {
  try {
    const user = await loginUser(req.body.email);
    if (user.length === 0)
      return res.json({
        status: 204,
        success: false,
        message: "Not found.",
      });
    if (
      user.length == 0 &&
      bcrypt.compare(req.body.password, user.passwordHash)
    ) {
      const token = jwt.sign({ userId: user._id }, "mnnnnd", {
        expiresIn: "1d",
      });
      return res.json({
        user: { email: user.email, name: user.name },
        token,
      });
    }
    res.json({
      status: 204,
      success: false,
      message: "Please, check your credentials.",
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

module.exports = {
  getUsersController,
  getUserController,
  addUserController,
  updatedUserController,
  loginUserController,
};
