var path = require('path');

module.exports = function(app) {
	//homepage
	app.get("/", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/home.html"));
  	});
	//surveypage
  	app.get("/survey", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/survey.html"));
  	});
};