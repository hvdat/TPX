const express = require("express");
const router = express.Router();
const signupControllers = require("../controlers/signupControllers");

/* GET home page. */
router.get("/", signupControllers.signup);

module.exports = router;