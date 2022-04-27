let router = require("express").Router();

router.get("/", (req, res) => {
	res.json({
		status: "Its Working",
		message: "Welcome to User Application",
	});
});

var contactcontroller = require("./userController");

router
	.route("/contacts")
	.get(contactcontroller.index)
	.post(contactcontroller.new);

router
	.route("/contacts/:contact_id")
	.get(contactcontroller.view)
	.patch(contactcontroller.update)
	.put(contactcontroller.update)
	.delete(contactcontroller.delete);

module.exports = router;
