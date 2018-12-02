const User = require("../../models/user");
const assert = require("assert");

describe("Updating records", () => {

	let user;

	beforeEach((done) => {
		user = new User({ name: "John", email: "jojotimao2018@hotmail.com", password: "1234556" });
		user.save().then(() => {
			done();
		}).catch((err) => {
			console.log(err);
		});
	});

	it("Updates a record from the database", (done) => {
		User.findOneAndUpdate({ _id: user._id }, { name: "Paulo Guedes" }).then(() => {
			User.findOne({ _id: user._id }).then((res) => {
				assert(res.name === "Paulo Guedes");
				done();
			});
		});
	});
});
