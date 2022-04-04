const express = require("express");
const router = express.Router();
const checkOutControllers = require("../controlers/checkOutControllers");

/* GET home page. */
router.get("/", checkOutControllers.checkout);

module.exports = router;
