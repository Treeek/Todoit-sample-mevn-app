const express = require("express");
const app = express();
const db = require("./config/db");
const routerLogin = require("./routes/login_route");
const routerApi = require("./routes/routes");
const passport = require("./config/passport-setup");

app.use(require("express-session")({
	secret: "nakedPepe", // just a long random string
	resave: false,
	saveUninitialized: true
}));
app.use(require("body-parser").urlencoded({
	extended: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("", routerLogin);
app.use("/api", routerApi);

app.get("/", (req, res) => {
	res.send("Hello Guys");
});

db.once("open", function () {
	console.log("DB connected!");
	app.listen(5500);
}).on("error", console.error.bind(console, "connection error:"));

