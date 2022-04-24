const express = require("express");
const router = express.Router();
const listControllers= require("./listControllers")


/* GET home page. */
router.get("/", listControllers.listShow);
router.get("/api/list/:page", listControllers.apiList);

module.exports = router;
