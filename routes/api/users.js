const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route     POST  api/user
// @desc      Register user
// @access    Public

router.post(
	"/",
	[
		check("name", "Name is required.").not().isEmpty(),

		check("email", "Please provide a valid email address.").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({ min: 6 }),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log(req.body);
			return res.status(400).json({ errors: errors.array() });
		}
	}
);

module.exports = router;
