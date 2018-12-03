const express = require("express");
const app = express();

const db = require("./config/db");

const routerApi = require("./routes/routes");


app.use(require("body-parser").urlencoded({
	extended: true
}));
app.use("/api", routerApi);
app.get("/", (req, res) => {
	res.send("Hello Guys");
});

db.once("open", function () {
	console.log("DB connected!");
	app.listen(5500);
}).on("error", console.error.bind(console, "connection error:"));

