const { default: axios } = require("axios");
const express = require("express");
const app = express()

let body_parser = require("body-parser");
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile("./index.html", {
		root: "/home/shreyash/Desktop/node-tutorial/node-api-call/",
	});
});

app.post("/", (req, res, next) => {
	let country = req.body.country
	let key = req.body.key
		axios.get(
			`http://universities.hipolabs.com/search?name=${key}&country=${country}`
		)
		.then((response) => {
			var output = "";
			response.data.forEach((element) => {
				output += `<li>${element.name}</li>`;
                output +=  `Website : ${element.web_pages}<br>`
                output += '<br>'
			});
			res.send(output);
			console.log(response);
		})
		.catch((err) => {
			console.log(err);
		});
});

app.listen(3000);
