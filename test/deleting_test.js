const User = require("../models/user");
const assert = require("assert");

describe("Deleting records", () => {

	let user;

	beforeEach((done) => {
		user = new User({ name: "John", email: "jojotimao2018@hotmail.com", password: "1234556" });
		user.save().then(() => {
			done();
		}).catch((err) => {
			console.log(err);
		});
	});

	it("Delets a record from the database", (done) => {
		User.findOneAndDelete({ _id: user._id }).then(() => {
			User.findOne({ _id: user._id }).then((res) => {
				assert(res === null);
				done();
			});
		});
	});
});
