const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello Guys");
});

app.listen(5500);