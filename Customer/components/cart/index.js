const express = require("express");
const router = express.Router();
const cartControllers = require("../cart/cartControllers");

/* GET home page. */
router.get("/", cartControllers.cart);

router.get("/api/list", cartControllers.cartList);

router.get("/api/delete/:productID", cartControllers.deleteProduct);

module.exports = router;
