const User = require("../models/user");

let taskController = {};

taskController.getTasksCompleated = async function (req, res) {
	User.findById({ _id: req.body._id }).then((user => {
		res.statusMessage = "Success";
		res.statusCode = 200;
		res.json({ tasksCompleated: user.tasksCompleated });
	}));
};

module.exports = taskController;