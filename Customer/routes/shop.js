const express = require("express");
const router = express.Router();
const productControllers = require("../controlers/productControllers");
/* GET home page. */
router.get("/", productControllers.list);

router.get("/:productID", productControllers.details);

module.exports = router;
