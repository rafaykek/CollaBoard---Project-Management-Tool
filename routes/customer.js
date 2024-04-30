const express = require('express');
const router = express.Router();

const title = "hello";

// Render login form

router.get('/customer', function(req, res, next) {
  res.render('login.ejs'); // load the index.ejs file

});

// Handle login form submission
router.post('/', (req, res) => {
  const { username, password } = req.body;
  // Check if username and password are valid
  if (username === 'user' && password === 'password') {
    // Set session variable to indicate user is logged in
    req.session.loggedIn = true;
    // Redirect to home page or dashboard
    res.redirect('/');
  } else {
    // Render login form with error message
    res.render('login', { error: 'Invalid username or password' });
  }
});

module.exports = router;
