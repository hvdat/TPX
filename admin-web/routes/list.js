const express = require("express");
const router = express.Router();
const listControllers = require("../controlers/listControllers");


/* GET home page. */
router.get("/", listControllers.list);

module.exports = router;
