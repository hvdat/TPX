var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
var exphbs = require("express-handlebars");

const passport = require("./components/authentication/passport");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var shopRouter = require("./components/products/index");
var aboutRouter = require("./routes/about");
var contactRouter = require("./routes/contact");
var newRouter = require("./routes/new");
var cartRouter = require("./components/cart");
var checkoutRouter = require("./routes/checkout");
var authenticationRouter = require("./components/authentication");
const profileRouter = require("./components/profile");
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
app.set("view engine", ".hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
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
app.get('/api/portfolio', passport.authenticate("session"), (req, res) => {
    res.send(req.user);
});
app.use(function (req, res, next) {
    req.session.cart = req.session.cart || [];
    res.locals.user = req.user;
    res.locals.cartLength = req.session.cart.reduce((total, item) => total + item.quantity, 0);
    next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/shop", shopRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/news", newRouter);
app.use("/cart", cartRouter);
app.use("/checkout", checkoutRouter);
app.use("/profile", profileRouter);
app.use("/", authenticationRouter);
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
