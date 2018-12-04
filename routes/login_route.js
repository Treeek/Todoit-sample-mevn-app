const router = require("express").Router();
const passport = require("../config/passport-setup");
const userController = require("../controllers/userController");
router.post("/login", passport.authenticate("local", { failureRedirect: "/home" }), userController.login);

module.exports = router;