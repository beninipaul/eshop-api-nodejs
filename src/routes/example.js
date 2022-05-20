const express = require("express");
const router = express.Router();

router.get("", (req, res) => res.json({ example: "Here is a example" }));

module.exports = router;
