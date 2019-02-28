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
    Blogpost.findById(req.params.id, function(err, foundBlogpost){
        if(err){
            console.log(err);
        } else {
            console.log("I found a blog post.")
            res.render('show', {blogpost: foundBlogpost});
        }
    });
});

router.get("/posts", function(req, res){
    Blogpost.find({}, function(err, allBlogposts){
       if(err){
           console.log(err);
       } else {
          allBlogposts.sort(function(a,b){
            if (err){
              console.log(err);
            } else {
              console.log('sorting')
              return new Date(a.date).getTime() - new Date(b.date).getTime();
            }
          });
          res.render('posts',{blogposts:allBlogposts});
          allBlogposts.forEach(function(blogpost){
            console.log(blogpost.title)
          })
       }
    });
});

router.get("/about", function(req, res){
    //find the campground with provided ID
    res.render('about')
});

module.exports = router;