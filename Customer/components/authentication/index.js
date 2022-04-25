const express = require("express");
const router = express.Router();
const authenticationControllers = require("./authenticationControllers");
const passport = require("./passport");

/* GET home page. */
router.get("/register", authenticationControllers.registerShow);
router.post("/register", authenticationControllers.register);
router.get(
    "/api/check-email-exist/:email",
    authenticationControllers.checkEmailExist
);
router.get("/login", authenticationControllers.loginShow);
router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
    })
);
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
module.exports = router;
