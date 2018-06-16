const mongoose              = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');


mongoose.connect('mongodb://localhost/alons-blog-backend');
mongoose.set("debug", true);
mongoose.Promise = Promise;

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
