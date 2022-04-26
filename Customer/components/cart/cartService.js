const {order_detail} = require("../../models");
const {order} = require("../../models");
const {users} = require("../../models")
const {response} = require("express");
const {add} = require("nodemon/lib/rules");
exports.initOrder = async (req, user_id, address, desc, status = 0) => {
    await order.create({
        user_id: user_id,
        address: address,
        desc: desc,
        status: status
    }).then(function (orderCreated) {
        req.session.order_id = orderCreated.id;
    })
}

exports.insertOrderTotalPrice = async (orderID, total_price) => {
    await order.update({
        price: total_price
    }, {
        where: {
            id: orderID
        }
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

exports.showAllUserOrders = async (user_id) => {
    return await order.findAll({
        where: {
            user_id: user_id
        },
        raw: true,
        attributes: ['id', 'price', 'address', 'status']
    });
}