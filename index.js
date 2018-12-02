const express = require("express");
const app = express();

const routerApi = require("./routes/routes");
app.use(require("body-parser".json()));
app.use("/api", routerApi);
app.get("/", (req, res) => {
	res.send("Hello Guys");
});

app.listen(5500);