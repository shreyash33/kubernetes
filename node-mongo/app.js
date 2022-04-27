const express = require("express");
let app = express();

let body_parser = require("body-parser");
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

let route = require("./app-router");
app.use("/api", route);

let mongoose = require("mongoose");

mongoose.connect(`mongodb://${process.env.username}:${process.env.password}@${process.env.host}:27017`, { useNewUrlParser: true });
var db = mongoose.connection;

if (!db) {
	console.log("Error DB connection");
} else {
	console.log("DB connected");
}

app.get("/", (req, res) => {
	res.send("User Application");
});

app.listen(3333, () => {
	console.log("Server Started on port " + 3333);
});
