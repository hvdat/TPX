const {list, singleProduct} = require("./productsServices");
const {categoryProductList} = require("./productsServices");
const {categoryName} = require("./productsServices");

const ITEM_PER_PAGE = 6;
exports.list = async (req, res, next) => {
    let {page} = req.query;
    if (!page || isNaN(page)) page = 1;
    const {count, rows: products} = await list(
        (page - 1) * ITEM_PER_PAGE,
        ITEM_PER_PAGE
    );
    const totalPages = Math.ceil(count / ITEM_PER_PAGE);
    const prevPage = page > 1 ? page - 1 : 1;
    const nextPage = page < totalPages ? page + 1 : totalPages;
    const cateName = await categoryName();
    console.log(cateName);
    res.render("product/shop", {
            cateName,
            products,
            count,
            pages: Array.from(Array(totalPages).keys()).map((i) => i + 1), // [1, 2, 3, 4, 5]
            prevPage,
            nextPage,
        },
    );
};
exports.details = async (req, res) => {
    const id = req.params.productID;
    const product = await singleProduct(id);
    console.log(product);
    res.render("product/single-product", {product});
};

exports.apiList = async (req, res) => {
    const page = Number(req.params.page);
    if (!page || isNaN(page)) page = 1;
    const {count, rows: products} = await list(
        (page - 1) * ITEM_PER_PAGE,
        ITEM_PER_PAGE
    );
    const totalPages = Math.ceil(count / ITEM_PER_PAGE);
    const prevPage = page > 1 ? page - 1 : 1;
    const nextPage = page < totalPages ? page + 1 : totalPages;
    res.json({
        products,
        count,
        pages: Array.from(Array(totalPages).keys()).map((i) => i + 1), // [1, 2, 3, 4, 5]
        prevPage,
        nextPage,
    });
};

exports.apiCategory = async (req, res) => {
    const cateID = req.params.cateID;
    let page = Number(req.params.page);
    const {count, rows: products} = await categoryProductList(
        cateID,
        (page - 1) * ITEM_PER_PAGE,
        ITEM_PER_PAGE
    );
    const totalPages = Math.ceil(count / ITEM_PER_PAGE);
    res.json({
        products,
        count,
        pages: Array.from(Array(totalPages).keys()).map((i) => i + 1), // [1, 2, 3, 4, 5]
    });
};

exports.addToCart = async (req, res) => {
    const id = req.params.productID;
    const product = await singleProduct(id);

    product.quantity = 1;
    product.total = product.price;

    let cart = req.session.cart;
    const findItem = cart.find((item) => {
        if (item.id === product.id) {
            item.quantity++;
            item.total = item.quantity * item.price;
            return true;
        }
    });
    if (findItem === undefined) {
        cart.push(product);
    }
    res.json({
        cart: req.session.cart,
        success: true,
    });
};

exports.cartList = async (req, res) => {
    res.json({
        cart: req.session.cart,
    });
};