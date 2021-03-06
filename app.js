var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	indexRoutes = require("./routes/index"),
	Blogpost  = require("./models/blogpost"),
	seedDB = require('./seeds'),
	tone = require('tone');

mongoose.connect('mongodb://testuser:testpassword1@ds341825.mlab.com:41825/samsblog', { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// seedDB(); 

var port = process.env.PORT || 3000;

app.use("/", indexRoutes);

app.listen(port, process.env.IP, function(){
   // console.log("Hello world");
});