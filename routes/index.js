var express = require("express");
var router  = express.Router();
var Blogpost = require("../models/blogpost");

router.get("/", function(req, res){
    res.render('home')
});

router.get("/about", function(req, res){
    res.render('about')
});

router.get("/piano", function(req, res){
    res.render('piano')
});

router.get("/basic-web-music-api", function(req, res){
    res.render('basic')
});

router.get("/garageband", function(req, res){
    res.render('garageband')
});

module.exports = router;