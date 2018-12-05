const User = require("../models/user");
const { validationResult } = require("express-validator/check");
let userController = {};

userController.save = async function (req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	const user = new User(req.body);
	user.save().then(() => {
		res.statusMessage = "Success";
		res.status(200).send();
	});
};

userController.login = function (req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	User.findOne({ email: req.body.email }).then((user) => {
		req.session.Auth = user._id;
		res.statusMessage = "Success";
		res.status(200).send();
	});
};

module.exports = userController;