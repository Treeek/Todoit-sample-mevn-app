const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: { type: String, required: true, max: 255 },
	email: { type: String, required: true, max: 255 },
	password: { type: String, required: true, max: 255 },
	tasksCompleated: { type: Number, required: false, default: 0 }
});

module.exports = mongoose.model("User", UserSchema);