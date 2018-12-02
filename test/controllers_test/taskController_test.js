const assert = require("assert");
const User = require("../../models/user");
const Task = require("../../models/task");
const taskController = require("../../controllers/taskController");
const http_mocks = require("node-mocks-http");

function buildResponse() {
	return http_mocks.createResponse({ eventEmitter: require("events").EventEmitter });
}

describe("Task Controller", () => {
	let user;
	let tasks = [];
	beforeEach((done) => {
		user = new User({ name: "John", email: "jojotimao2018@hotmail.com", password: "1234556", tasksCompleated: 12 });
		user.save().then(() => {
			tasks[0] = new Task({ user_id: user._id, title: "Task 1", description: "Task 1 description" });
			tasks[0].save().then(() => {
				tasks[1] = new Task({ user_id: user._id, title: "Task 2", description: "Task 2 description" });
				tasks[1].save().then(() => {
					tasks[2] = new Task({ user_id: user._id, title: "Task 3", description: "Task 3 description" });
					tasks[2].save().then(() => {
						done();
					});
				});
			});
		}).catch((err) => {
			console.log(err);
		});
	});
	it("Gets the number of tasks compleated by a user", (done) => {
		const res = buildResponse();
		const req = http_mocks.createRequest({
			method: "POST",
			url: `/taskscompleated/${user._id}`,
		});
		req.body = {
			_id: user._id
		};
		res.on("end", () => {
			assert(res._isJSON());
			const data = JSON.parse(res._getData());
			User.findOne({ _id: user._id }).then((response) => {
				assert(response.tasksCompleated === data.tasksCompleated && res.statusCode === 200 && res.statusMessage === "Success");
				done();
			});
		});
		taskController.getTasksCompleated(req, res);
	});

	it("Gets all taks from a  user id", (done) => {

		const res = buildResponse();
		const req = http_mocks.createRequest({
			method: "GET",
			url: `/tasks/${user._id}`,
		});
		req.body = {
			_id: user._id
		};
		res.on("end", () => {
			assert(res._isJSON());
			Task.find({ user_id: user._id }).then((response) => {
				for (let index = 0; index < 3; index++) {
					const task = response[index];
					assert(task.title === `Task ${1 + index}` && task.description === `Task ${1 + index} description`);
				}
				assert(res.statusCode === 200 && res.statusMessage === "Success");
				done();
			});
		});
		taskController.getTasks(req, res);

	});
});