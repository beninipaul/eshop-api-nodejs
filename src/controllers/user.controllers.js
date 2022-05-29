const { getUsers, getUser, addUser } = require("../services/user.services");
const bcrypt = require("bcrypt");

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
      message: "Found.",
      userSaved,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

module.exports = { getUsersController, getUserController, addUserController };
