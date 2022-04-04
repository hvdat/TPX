const express = require("express");
const router = express.Router();
const cartControllers = require("../controlers//cartControllers");

/* GET home page. */
router.get("/", cartControllers.cart);

module.exports = router;
