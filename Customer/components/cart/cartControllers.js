const {singleProduct} = require("../products/productsServices");
exports.cart = (req, res, next) => {
    res.render("cart");
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