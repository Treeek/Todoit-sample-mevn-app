const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = Schema({
	user_id: { type: Schema.Types.ObjectId, ref: "User" },
	title: { type: String, required: true, max: 100 },
	date: { type: Date, required: false },
	description: { type: String, required: true, max: 255 },
	status: { type: Boolean, required: false, default: false }
});

module.exports = mongoose.model("Task", TaskSchema);