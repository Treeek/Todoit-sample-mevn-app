const assert = require("assert");
const User = require("../../models/user");
const taskController = require("../../controllers/taskController");
const http_mocks = require("node-mocks-http");

function buildResponse() {
	return http_mocks.createResponse({ eventEmitter: require("events").EventEmitter });
}

describe("Task Controller", () => {
	let user;
	beforeEach((done) => {
		user = new User({ name: "John", email: "jojotimao2018@hotmail.com", password: "1234556", tasksCompleated: 12 });
		user.save().then(() => {
			done();
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
});