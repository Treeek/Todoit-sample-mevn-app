const router = require("express").Router();
const userController = require("../controllers/userController");
const taskController = require("../controllers/taskController");

router.get("/", (req, res) => {
	res.status(200).json("api working ;)");
});
//user routes
router.post("/users", userController.save);
//task routes
router.get("/taskscompleated/:id_user", taskController.getTasksCompleated);
router.get("/tasks/:id_user", taskController.getTasks);
router.post("tasks", taskController.save);
module.exports = router;