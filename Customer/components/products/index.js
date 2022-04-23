const express = require("express");
const router = express.Router();
const productControllers = require("./productsControllers");
/* GET home page. */
router.get("/", productControllers.list);

router.get("/:productID", productControllers.details);

router.get("/api/:page", productControllers.apiList);

// route.get("/api/:page/:productID", productControllers.apiDetails);

router.get("/api/cate/:cateID/:page", productControllers.apiCategory);

module.exports = router;
