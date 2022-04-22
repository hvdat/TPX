const express = require("express");
const router = express.Router();
const postControllers = require("./postControllers");


/* GET home page. */
router.get("/post", postControllers.postShow);
router.post("/post", postControllers.prod_post);
module.exports = router;
