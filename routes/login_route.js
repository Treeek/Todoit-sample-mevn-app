const router = require("express").Router();
const passport = require("../config/passport-setup");
const userController = require("../controllers/userController");
const { check } = require("express-validator/check");

router.post("/login", check("email").isEmail().withMessage("Not a valid email"), passport.authenticate("local", { failureRedirect: "/home" }), userController.login);

module.exports = router;