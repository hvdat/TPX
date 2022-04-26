const express = require("express");
const router = express.Router();
const profileControllers = require("./profileControllers");
/* GET home page. */
router.get("/", profileControllers.profileShow);
router.post("/update/info", profileControllers.updateProfile);
router.post("/update/password", profileControllers.updatePassword);
router.get("/api/getInfo", profileControllers.getInfo);

module.exports = router;
