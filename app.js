var express = require("express");
var path = require("path");

var routes = require('./routes');

var app = express();
app.set("port",process.env.Port || 3000);
// tell which View we are using
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//call the route js
app.use(routes);

// not best practice to routing here
app.listen(app.get("port"),function(){

console.log("Server has started on port with : " + app.get("port"));
});