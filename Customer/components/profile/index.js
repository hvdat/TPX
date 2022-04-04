const express = require("express");
const router = express.Router();
const profileControllers = require("./profileControllers");
/* GET home page. */
router.get("/", profileControllers.profileShow);

module.exports = router;
