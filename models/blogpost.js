var mongoose = require("mongoose");

var blogpostSchema = new mongoose.Schema({
   title: String,
   body: String,
   date: Date,
   datestring: String,
   image: String,
   note: String,
   short: String,
   summary: String,
   top: Boolean
});

module.exports = mongoose.model("Blogpost", blogpostSchema);