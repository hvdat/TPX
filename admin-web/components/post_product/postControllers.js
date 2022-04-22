const postService = require("./postService");

exports.postShow = (req, res, next) => {
  var page = req.query.page;
  res.render("post");
};


exports.prod_post = async function (req, res) {
  console.log(req.body.name);
  await postService.prod_post(
    req.body.name,
    req.body.price,
    req.body.img_url,
    req.body.category
  );
  res.redirect("/");
};
