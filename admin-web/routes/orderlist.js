const express = require("express");
const router = express.Router();
const orderlistControllers = require("../controlers/orderlistControllers");

/* GET home page. */
router.get("/", orderlistControllers.orderlist);

module.exports = router;
