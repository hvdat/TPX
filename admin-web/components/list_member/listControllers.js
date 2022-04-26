const {list} = require('./listMemService');
const ITEM_PER_PAGE = 6;
exports.listShow = async (req, res, next) => {
    let { page } = req.query;
    if (!page || isNaN(page)) page = 1;
    const { count, rows: users } = await list(
      (page - 1) * ITEM_PER_PAGE,
      ITEM_PER_PAGE
    );
    const totalPages = Math.ceil(count / ITEM_PER_PAGE);
    const prevPage = page > 1 ? page - 1 : 1;
    const nextPage = page < totalPages ? page + 1 : totalPages;
    res.render("member/memlist", {
      users,
      count,
      pages: Array.from(Array(totalPages).keys()).map((i) => i + 1), // [1, 2, 3, 4, 5]
      prevPage,
      nextPage,
    });
};
exports.apiList = async (req, res) => {
    const page = Number(req.params.page);
    if (!page || isNaN(page)) {page = 1;}
    const { count, rows: users } = await list(
      (page - 1) * ITEM_PER_PAGE,
      ITEM_PER_PAGE
    );
    const totalPages = Math.ceil(count / ITEM_PER_PAGE);
    const prevPage = page > 1 ? page - 1 : 1;
    const nextPage = page < totalPages ? page + 1 : totalPages;
    res.json({
      users,
      count,
      pages: Array.from(Array(totalPages).keys()).map((i) => i + 1), // [1, 2, 3, 4, 5]
      prevPage,
      nextPage,
    });
  };
  