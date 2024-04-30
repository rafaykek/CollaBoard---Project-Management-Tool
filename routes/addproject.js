const express = require('express');
const router = express.Router();
var database = require("../database")
// Define the value of action variable
// Render the view with the defined action variable

const title = "hello";
// Render login form
router.get('/', function(req, res, next) {
  res.render('projectForm', { action : 'addproject' }); // load the index.ejs file

});

router.post("/", function(req, res)
 {
    var inputprojectname = req.body.inputprojectname;
    var inputprojectdesc = req.body.inputprojectdesc;
    var inputuserID = req.body.inputuserID;
    var inputstartdate = req.body.inputstartdate;
    var inputenddate = req.body.inputenddate;

    var query = `
    INSERT INTO Project (ProjectName, PMID, Description, StartDate, EndDate)
    VALUES("${inputprojectname}", "${inputuserID}", "${inputprojectdesc}", "${inputstartdate}","${inputenddate}")
    `;

    database.query(query, function(error, data) {
      if (error) {
          throw error;
      } else {
          req.flash('success', 'Project Data Inserted');
          res.redirect("/dashboardmanager");
      }
  });
	
});


router.get('/all', function(req, res, next) {
  // Fetch all the projects from the database
  var query = 'SELECT * FROM Project';

  database.query(query, function(error, projects) {
    if (error) {
      throw error;
    } else {
      // Render the view with the list of projects
      res.render('allproject', { projects });
    }
  });
});



module.exports = router;
