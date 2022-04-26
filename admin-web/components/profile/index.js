const express = require("express");
const router = express.Router();
const profileControllers = require("./profileControllers");
/* GET home page. */
router.get("/", profileControllers.profileShow);
router.post("/", profileControllers.updateInfor);

module.exports = router;
