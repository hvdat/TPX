const express = require("express");
const router = express.Router();
const contactControllers = require("../controlers/contactControllers");

/* GET home page. */
router.get("/", contactControllers.contact);

module.exports = router;
