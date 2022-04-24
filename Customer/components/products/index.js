const express = require("express");
const router = express.Router();
const productControllers = require("./productsControllers");
/* GET home page. */
router.get("/", productControllers.list);

router.get("/:productID", productControllers.details);

router.get("/api/:page", productControllers.apiList);

router.get("/api/add/:productID", productControllers.addToCart);

router.get("/api/cate/:cateID/:page", productControllers.apiCategory);

router.get("/api/cart/list", productControllers.cartList);

module.exports = router;
