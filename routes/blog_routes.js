const express               = require('express'),
      router                = express.Router(),
      BlogPost              = require('../models/blogpost'),
      passport              = require('passport'),
      LocalStrategy         = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      User                  = require('../models/user');

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==========
// INDEX == GET
// ==========
router.get('/', function(req, res, next){
  BlogPost.find({})
          .then(posts => res.send(posts))
          .catch(err => next(err));

});

// ==========
// VIEW == GET
// ==========
router.get('/:id', function(req, res, next){
  BlogPost.findById(req.params.id)
          .then(post => res.send(post))
          .catch(err => next(err));
});
// ==========
// SEARCH BY TAG == GET
// ==========
// router.get('/', function(req, res, next){
//   BlogPost.find({})
//           .then(posts => res.send(posts))
//           .catch(err => next(err));
// });

// =====================
// REGISTER
// =======================

router.post('/register', function(req, res){
  console.log("hi", req.query);
  User.register(new User({
    username: req.query.username,
    email: req.query.email,
  }), req.query.password, function(err, user){
      if(err){
        console.log(err)
      }
      passport.authenticate("local")(req, res, function(){
        res.send("registered admin");
      })
  })
});

// ========================
// LOGIN
// ========================

router.get('/login', function(req, res, next){
  res.render
})


// =======================
// ADMIN ROUTES
// =======================

router.get('/admin', function(req, res, next){
  BlogPost.find({})
          .then(post => res.send(post))
          .catch(err => next(err));
});

// ==========
// NEW POST == POST
// ==========



router.post('/admin', function(req, res, next){
  BlogPost.create(req.body)
  .then(post => res.status(201).send(post))
  .catch(err => next(err));
  res.red
});
// ==========
// VIEW == GET
// ==========
router.get('/:id', function(req, res, next){
  BlogPost.findById(req.params.id)
          .then(post => res.send(post))
          .catch(err => next(err));
});
// ==========
// UPDATE == PUT
// ==========
//
// ==========
// DELETE == DELETE
// ==========

module.exports = router;
