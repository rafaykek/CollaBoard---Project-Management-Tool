const express = require('express');
const router = express.Router();

const title = "hello";

// Render login form

router.get('/', function(req, res, next) {
  res.render('dashboardmanager'); // load the index.ejs file

});





// Handle login form submission

module.exports = router;
