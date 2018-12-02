const User = require("../models/user");

let userController = {};

userController.save = async function (req, res) {
	const user = new User(req.body);
	user.save().then(() => {
		res.statusMessage = "Success";
		res.status(200).send();
	});
};

module.exports = userController;