const User = require("../models/user");
const Task = require("../models/task");
let taskController = {};

taskController.getTasksCompleated = async function (req, res) {
	User.findById({ _id: req.session.Auth }).then((user => {
		res.statusMessage = "Success";
		res.statusCode = 200;
		res.json({ tasksCompleated: user.tasksCompleated });
	}));
};
taskController.getTasks = async function (req, res) {
	Task.find({ user_id: req.session.Auth }).then((tasks) => {
		res.statusMessage = "Success";
		res.statusCode = 200;
		res.json(tasks);
	});
};
taskController.save = async function (req, res) {
	const task = new Task(req.body);
	task.save().then(() => {
		res.statusMessage = "Success";
		res.status(200).send();
	});
};
module.exports = taskController;