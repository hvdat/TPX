const express = require("express");
const router = express.Router();
const newControllers = require("../controlers/newControllers");

/* GET home page. */
router.get("/", newControllers.new);

module.exports = router;
