const express = require("express");
const router = express.Router();
const postControllers = require("../controlers/postControllers");

/* GET home page. */
router.get("/", postControllers.post);

module.exports = router;
