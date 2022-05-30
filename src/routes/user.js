const express = require("express");
const router = express.Router();
const {
  getUsersController,
  getUserController,
  addUserController,
  updatedUserController,
  loginUserController,
} = require("../controllers/user.controllers");

router.get("/user", getUsersController);
router.get("/user/:userId", getUserController);
router.post("/user", addUserController);
router.post("/user/auth", loginUserController);
router.put("/user/:userId", updatedUserController);

module.exports = router;
