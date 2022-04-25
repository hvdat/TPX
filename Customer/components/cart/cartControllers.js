const {singleProduct} = require("../products/productsServices");
const {initOrder} = require("../cart/cartService");
const {initOrderDetail} = require("../cart/cartService");
exports.cart = (req, res) => {
    res.render("cart/cart");
};

exports.cartList = async (req, res) => {
    res.json({
        cart: req.session.cart,
    });
};

exports.deleteProduct = async (req, res) => {
    const id = Number(req.params.productID);

    let cart = req.session.cart;

    const item = cart.find((item) => item.id === id);
    const idx = cart.indexOf(item);

    if (cart[idx].quantity > 1) {
        cart[idx].quantity--;
        cart[idx].total = cart[idx].price * cart[idx].quantity;
    } else {
        cart.splice(idx, 1);
    }

    res.json({
        cart: req.session.cart,
        success: true,
    });
};

exports.payment = async (req, res) => {
    const user_id = req.user.user_id;
    await initOrder(req, user_id);
    const order_id = req.session.order_id;
    const cart = req.session.cart;
    for (let i = 0; i < cart.length; i++) {
        await initOrderDetail(order_id, cart[i].id, cart[i].quantity, cart[i].total);
    }
};
