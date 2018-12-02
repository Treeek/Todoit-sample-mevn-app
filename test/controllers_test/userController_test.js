const assert = require("assert");
const User = require("../../models/user");
const userController = require("../../controllers/userController");
const http_mocks = require("node-mocks-http");

function buildResponse() {
	return http_mocks.createResponse({ eventEmitter: require("events").EventEmitter });
}

describe("User Controller", () => {
	it("Saves a user into the database", (done) => {
		const res = buildResponse();
		const req = http_mocks.createRequest({
			method: "POST",
			url: "/users",
		});

		req.body = {
			email: "jojotimao@hotmail.com",
			password: "1234556",
			name: "John"
		};

		res.on("end", () => {
			User.findOne({ name: "John" }).then((response) => {
				assert(response.name === "John" && res.statusCode === 200 && res.statusMessage === "Success");
				done();
			});
		});
		userController.save(req, res);
	});
});