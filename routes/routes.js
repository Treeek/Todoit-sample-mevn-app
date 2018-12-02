const router = require("express").Router();

router.get("/", (req, res) => {
	res.status(200).json("api working ;)");
});

//user routes

//task routes

module.exports = router;