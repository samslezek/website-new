var express = require("express");
var router  = express.Router();
var Blogpost = require("../models/blogpost");

router.get("/", function(req, res){
    res.render('home')
});

router.get("/about", function(req, res){
    res.render('about')
});

router.get("/music", function(req, res){
    res.render('music')
});


module.exports = router;