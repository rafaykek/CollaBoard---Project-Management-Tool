const express = require('express');
const router = express.Router();
var database = require("../database")

const title = "hello";

// Render login form
router.get('/', function(req, res, next) {
  res.render('login');
});

// Handle login form submission
router.post('/', (req, res) => {
  const { inputName, inputPassword } = req.body;

  // Check if inputName and inputPassword are valid
  database.User.findOne({ Email: inputName, Password: inputPassword }, (err, user) => {
    if (err) {
      // Handle error
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (user) {
      // Set session variable to indicate user is logged in
      req.session.loggedIn = true;
      // Redirect to home page or dashboard
      res.redirect('dashboard');
    } else {
      // Render login form with error message
      res.render('login', { error: 'Invalid email or password' });
    }
  });
});

module.exports = router;


// user
