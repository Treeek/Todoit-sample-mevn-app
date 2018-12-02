const mongoose = require("mongoose");

before((done) => {
	mongoose.connect("mongodb://john:123456A@ds044587.mlab.com:44587/todotitest", { useNewUrlParser: true });
	mongoose.connection.once("open", function () {
		console.log("DB connected!");
		done();
	}).on("error", console.error.bind(console, "connection error:"));
});

beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		done();
	});
});