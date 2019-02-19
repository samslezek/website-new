var express = require("express");
var router  = express.Router();
var Blogpost = require("../models/blogpost");

router.get("/", function(req, res){
    Blogpost.find({}, function(err, allBlogposts){
       if(err){
           console.log(err);
       } else {
          res.render('home',{blogposts:allBlogposts});
          allBlogposts.forEach(function(blogpost){
          	console.log(blogpost.title)
          })
       }
    });
});

module.exports = router;