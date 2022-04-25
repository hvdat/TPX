const {order_detail} = require("../../models");
const {order} = require("../../models");
const {response} = require("express");

exports.initOrder = async (req, user_id) => {
    await order.create({
        user_id: user_id,
    }).then(function (orderCreated) {
        req.session.order_id = orderCreated.id;
    })
}

exports.initOrderDetail = async (order_id, product_id, quantity, price) => {
    await order_detail.create({
        order_id: order_id,
        products_id: product_id,
        quantity: quantity,
        total_price: price,
    });
}