var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
var exphbs = require("express-handlebars");

const passport = require("./components/authentication/passport");
var indexRouter = require("./routes/index");
var authenticationRouter = require("./components/authentication");
var orderlistRouter = require("./routes/orderlist");
var postRouter = require("./components/post_product");
var signupRouter = require("./routes/signup");
var listRouter = require("./components/list_product");
var listMemRouter = require("./components/list_member");
var listCmtRouter = require("./components/list_comment");
var app = express();

// view engine setup
var hbs = exphbs.create({
  defaultLayout: "layout",
  extname: ".hbs",
  helpers: {
      section: function (name, options) {
          if (!this._sections) this._sections = {};
          this._sections[name] = options.fn(this);
          return null;
      },
  },
});
app.engine("hbs", hbs.engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use("/", indexRouter);
app.use("/", authenticationRouter);
app.use("/orderlist", orderlistRouter);
app.use("/post", postRouter);
app.use("/signup", signupRouter);
app.use("/list", listRouter);
app.use("/insert", indexRouter);
app.use("/listmem", listMemRouter)
app.use("/listcmt", listCmtRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
