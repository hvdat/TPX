const express = require("express");
const router = express.Router();
const aboutControllers = require("../controlers/aboutControllers");

/* GET home page. */
router.get("/", aboutControllers.about);

module.exports = router;
