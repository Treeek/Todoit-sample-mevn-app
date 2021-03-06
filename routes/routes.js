const router = require("express").Router();
const userController = require("../controllers/userController");
const taskController = require("../controllers/taskController");
const { check } = require("express-validator/check");

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
router.post("/users", check("email").isEmail().withMessage("Not a valid email"), userController.save);
//task routes
router.get("/taskscompleated", checkAuthentication, taskController.getTasksCompleated);
router.get("/tasks", checkAuthentication, taskController.getTasks);
router.post("/tasks", checkAuthentication, taskController.save);

module.exports = router;