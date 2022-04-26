const express = require("express");
const router = express.Router();
const cartControllers = require("../cart/cartControllers");

/* GET home page. */
router.get("/", cartControllers.cart);

router.get("/checkout", cartControllers.showCheckout);

router.get("/api/list", cartControllers.cartList);

router.get("/api/delete/:productID", cartControllers.deleteProduct);

router.post("/payment", cartControllers.payment);

module.exports = router;
