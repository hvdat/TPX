const express = require("express");
const router = express.Router();
const loginControllers = require("../controlers/loginControllers");

/* GET home page. */
router.get("/", loginControllers.login);

module.exports = router;
