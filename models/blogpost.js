var mongoose = require("mongoose");

var blogpostSchema = new mongoose.Schema({
   title: String,
   body: String,
   date: Date,
   datestring: String,
   image: String,
   note: String
});

module.exports = mongoose.model("Blogpost", blogpostSchema);