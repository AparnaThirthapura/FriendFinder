//Server file for FriendFinder APP

//Setting up the dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Setting up the Express app and port
var app = express();
var PORT = 3000;

//Setting up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Setting the routes
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function(){
	console.log("Server Listening on PORT:" + PORT)
});