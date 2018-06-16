var express               = require('express'),
    app                   = express(),
    morgan                = require('morgan'),
    bodyParser            = require('body-parser'),
    cors                  = require('cors'),
    passport              = require('passport'),
    LocalStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    expressSession        = require('express-session'),
    https                 = require('https'),
    blogRoutes            = require('./routes/blog_routes');



app.use(expressSession({
  secret: "Freedom is earned through interconnection",
  resave: false,
  saveUninitialized: false
}));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
//Blog router
app.use("/blog", blogRoutes);

app.use(function(req, res, next){
  let err = new Error('Not found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});




//404 route
app.get("/*",function(req, res, next){
  res.send("404 page not found");
});



//ATM listening on localhost
// https.createServer(app).listen(3001, 141.226.122.215, fucntion(){console.log('SERVER IS RUNNNING on port 3001');});
app.listen(3001, ()=>console.log(`SERVER IS RUNNNING on port 3001`))
