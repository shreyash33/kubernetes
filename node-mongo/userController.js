let contact = require("./contactModel");

exports.index = function (req, res) {
	contact.get((err, contacts) => {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		} else {
			res.json({
				status: "Success",
				message: "Contacts retrieved succesfully",
				data: contacts,
			});
		}
	});
};

exports.new = function (req, res) {
	var con = new contact();
	//console.log(req.body)
	//console.log(req)
	con.name = req.body.name;
	con.email = req.body.email;
	con.gender = req.body.gender;
	con.phone = req.body.phone;
	//console.log(con.name)
	//console.log(con.email)
	//console.log(con.gender)
	//console.log(con.phone)
	con.save((err) => {
		if (err) {
			res.json(err);
		} else {
			res.json({
				message: "New contact created",
				data: con,
			});
		}
	});
};

exports.view = function (req, res) {
	contact.findById(req.params.contact_id, (err, con) => {
		if (err) {
			res.send(err);
		} else {
			res.json({
				message: "Contacts details loading",
				data: con,
			});
		}
	});
};

exports.update = function (req, res) {
	contact.findById(req.params.contact_id, (err, con) => {
		if (err) {
			res.send(err);
		} else {
			con.name = req.body.name;
			con.email = req.body.email;
			con.gender = req.body.gender;
			con.phone = req.body.phone;

			con.save((err) => {
				if (err) {
					res.json(err);
				}
				else{res.json({
					message: "Contact updated",
					data: con,
				})}
			});
		}
	});
};

exports.delete = function (req, res) {
	contact.remove(
		{
			_id: req.params.contact_id,
		},
		(err, contact) => {
			if (err) {
				res.send(err);
			} else {
				res.json({
					status: "Success",
					message: "Contact Deleted",
				});
			}
		}
	);
};
