var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/alons-blog-backend');
mongoose.set("debug", true);
mongoose.Promise = Promise;

const BlogPostSchema = new mongoose.Schema({
  title: String,
  author: String,
  subtitle: String,
  date: {type: Date, default: Date.now},
  body: String,
  comments: [{author:String, date: Date, body: String}],
  hidden: {type:Boolean, default: false},
  tags: [{type:String}]
});

var BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;
