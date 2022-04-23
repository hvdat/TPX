const {list} = require("./productsServices");
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
exports.details = async (req, res, next) => {
    res.render("product/single-product");
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