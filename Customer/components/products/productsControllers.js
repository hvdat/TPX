const { list } = require("./productsServices");
const ITEM_PER_PAGE = 6;
exports.list = async (req, res, next) => {
  const { page } = req.query;
  if (!page || isNaN(page)) page = 1;
  const { count, rows: products } = await list(
    (page - 1) * ITEM_PER_PAGE,
    ITEM_PER_PAGE
  );
  const totalPages = Math.ceil(count / ITEM_PER_PAGE);
  const prevPage = page > 1 ? page - 1 : 1;
  const nextPage = page < totalPages ? page + 1 : totalPages;
  res.render("product/shop", {
    products,
    count,
    pages: Array.from(Array(totalPages).keys()).map((i) => i + 1), // [1, 2, 3, 4, 5]
    prevPage,
    nextPage,
  });
};
exports.details = async (req, res, next) => {
  res.render("product/single-product");
};
