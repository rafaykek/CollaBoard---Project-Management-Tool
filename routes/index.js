var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CollaBoard' });
});

router.get('/login', function(req, res, next) {
  res.render('login.ejs'); // load the index.ejs file

});
router.get('/admin', function(req, res, next) {
  res.render('login.ejs'); // load the index.ejs file

});
router.get('/administrator', function(req, res, next) {
  res.render('login.ejs'); // load the index.ejs file

});
router.get('/customer', function(req, res, next) {
  res.render('login.ejs'); // load the index.ejs file

});

module.exports = router;