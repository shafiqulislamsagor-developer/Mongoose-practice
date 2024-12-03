// external imports

const express = require("express");
const { getLogin } = require("../controller/loginController");

const router = express.Router();

// login page
router.get("/login", getLogin);

module.exports = router;
