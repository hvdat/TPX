const express = require("express");
const router = express.Router();
const postControllers = require("./postControllers");


/* GET home page. */
router.get("/", postControllers.postShow);
router.post("/", postControllers.prod_post);

module.exports = router;
