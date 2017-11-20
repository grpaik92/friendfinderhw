var path = require('path'); 

var showName = require('../data/friends.js');

module.exports = function(app) {
	app.get("/api/friends", function (req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function (req, res) {
		var newfriend = req.body;
		newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

        friends.push(newfriend);

        res.json(newfriend);
	});
};
