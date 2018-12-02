const User = require("../models/user");
const assert = require("assert");

describe("Saving records", () => {
	it("Saves a record to the database", (done) => {
		const user = new User({ name: "John", email: "jojotimao2018@hotmail.com", password: "1234556" });
		user.save().then(() => {
			assert(user.isNew === false);
			done();
		}).catch((err) => {
			console.log(err);
		});
	});
});
