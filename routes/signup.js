const express = require('express');
const router = express.Router();
var database = require("../database")
// Define the value of action variable
// Render the view with the defined action variable

const title = "hello";
// Render login form
router.get('/', function(req, res, next) {
  res.render('signup', { action : 'signup' }); // load the index.ejs file

});

router.post("/", function(req, res)
 {
    var inputrole = req.body.inputrole;
    var inputname = req.body.inputname;
    var inputemail = req.body.inputemail;
    var inputpassword = req.body.inputpassword;
    var inputgender = req.body.inputgender;
    var inputDOB = req.body.inputDOB;
    var inputSalary = req.body.inputSalary;
    var inputDate = req.body.inputDate;
    var inputaddress = req.body.inputaddress;
    var inputcity = req.body.inputcity;
    var inputphone = req.body.inputphone;
    var inputCountry = req.body.inputCountry;
    var inputzip = req.body.inputzip;
    var inputdegree = req.body.inputdegree;

    var query = `
    INSERT INTO User (role, Name, Email, Password, Gender, DateOfBirth, Salary, JoiningDate, address, City, Phone, Country, ZipCode, EmployeeDegree)
VALUES ("${inputrole}", "${inputname}", "${inputemail}", "${inputpassword}","${inputgender}", "${inputDOB}", "${inputSalary}", "${inputDate}","${inputaddress}", "${inputcity}", "${inputphone}", "${inputCountry}","${inputzip}", "${inputdegree}")
    `;

    database.query(query, function(error, data) {
      if (error) {
          throw error;
      } else {
          req.flash('success', 'Project Data Inserted');
          res.redirect("/login");
      }
  });
	
});


module.exports = router;
