const express = require("express");
const app = express();
require("./config/db");
app.get("/", (req, res) => {
	res.send("Hello Guys");
});

app.listen(5500);