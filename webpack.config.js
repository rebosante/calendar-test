var path = require("path");

var DIST_DIR   = path.join(__dirname, "public/javascripts"),
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
	mode: 'development',
	context: CLIENT_DIR,
	entry: "./main",
	output: {
		path:     DIST_DIR,
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['.js']
	}
};