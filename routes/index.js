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

router.get("/posts/:id", function(req, res){
    //find the campground with provided ID
    Blogpost.findById(req.params.id, function(err, foundBlogpost){
        if(err){
            console.log(err);
        } else {
            console.log("I found a blog post.")
            // render show template with that campground
            res.render('show', {blogpost: foundBlogpost});
        }
    });
});

module.exports = router;