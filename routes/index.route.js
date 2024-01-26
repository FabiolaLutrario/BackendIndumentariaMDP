const express = require("express");
const router = express.Router();
const users = require("./users.route.js");

router.use("/users", users);

module.exports = router;