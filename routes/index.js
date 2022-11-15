var express = require('express');
var router = express.Router();
let usermodal = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/post', function(req, res, next) {
  res.render('write');
});

router.get('/reviews', function(req, res, next) {
  usermodal.find().then(function(data){
    res.render('read', {data});
  });
});

router.get('/update/:id', function(req, res, next) {
  usermodal.findOne({_id: req.params.id}).then(function(docs) {
    res.render('update', {game: docs});
  });
});

router.get('/delete/:id', function(req, res, next) {
  usermodal.findOneAndDelete({_id: req.params.id}).then(function(err){
    if (err) {
      return err;
    }
    res.redirect('/reviews');
  });
});

router.post('/submit', function(req, res, next) {
  let newdata = {
    name: req.body.gamename,
    device: req.body.gamedevice,
    review: req.body.review
  };
  usermodal.create(newdata).then(function(a){
    res.redirect('/reviews')
  })
});

router.post('/update/:id', function(req, res, next) {
  let updatedata = {
    name: req.body.gamename,
    device: req.body.gamedevice,
    review: req.body.review
  }
  usermodal.findOneAndUpdate({_id: req.params.id}, {'$set': updatedata}, {require: true}).then(function(updatedData){
    res.redirect('/reviews')
  })
});

module.exports = router;
