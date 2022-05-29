const express = require("express");
const router = express.Router();
const {
  getUsersController,
  getUserController,
  addUserController,
} = require("../controllers/user.controllers");

router.get("/user", getUsersController);
router.get("/user/:userId", getUserController);
router.post("/user", addUserController);

module.exports = router;
