const User = require("../../models/user");
const assert = require("assert");

describe("Finding records", () => {
	let user;
	beforeEach((done) => {
		user = new User({ name: "John", email: "jojotimao2018@hotmail.com", password: "1234556" });
		user.save().then(() => {
			done();
		}).catch((err) => {
			console.log(err);
		});
	});

	it("Finds a record from the database", (done) => {
		User.findOne({ name: "John" }).then((res) => {
			assert(res.name === "John");
			done();
		});
	});
	it("Finds a record from the database by id", (done) => {
		User.findOne({ _id: user._id }).then((res) => {
			assert(res._id.toString() === user._id.toString());
			done();
		});
	});
});
