const router = require("express").Router();
const userController = require("../controllers/userController");
const taskController = require("../controllers/taskController");
const passport = require("../config/passport-setup");

function checkAuthentication(req, res, next) {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.redirect("/home");
	}
}
router.get("/", (req, res) => {
	res.status(200).json("api working ;)");
});
//user routes
router.post("/users", userController.save);
//task routes
router.get("/taskscompleated/:id_user", checkAuthentication, taskController.getTasksCompleated);
router.get("/tasks/:id_user", checkAuthentication, taskController.getTasks);
router.post("/tasks", checkAuthentication, taskController.save);
router.post("/login", passport.authenticate("local", { failureRedirect: "/home" }), userController.login);

module.exports = router;