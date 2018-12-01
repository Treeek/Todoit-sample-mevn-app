var mongoose = require("mongoose");
mongoose.connect("mongodb://john:123456A@ds044577.mlab.com:44577/todoit");
var db = mongoose.connection;

db.once("open", function () {
	// we're connected!
	console.log("Yeah");

}).on("error", console.error.bind(console, "connection error:"));
