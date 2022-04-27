var express = require("express");
var app = express();
var port = 8000;
app.get("/", (req, res) => {
	res.send("Welcome to Shreyash");
});
var server = app.listen(port, () => {
	var host = server.address().address;
	console.log("Example app listening at http://%s:%s", host, port);
});
