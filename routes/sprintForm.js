const express = require('express');
const router = express.Router();
var database = require("../database")
// Define the value of action variable
// Render the view with the defined action variable

const title = "hello";
// Render login form
router.get('/', function(req, res, next) {
    res.render('sprintForm', { action : 'addsprint' }); // load the index.ejs file
  
  });

router.post("/", function(req, res)
 {
    var inputsprintID = req.body.inputsprintID;
    var inputSprintNumber = req.body.inputSprintNumber;
    var inputsprintname = req.body.inputsprintname;
    var inputsprintdesc = req.body.inputsprintdesc;
    var inputprojectID = req.body.inputprojectID;
    var inputstartdate = req.body.inputstartdate;
    var inputenddate = req.body.inputenddate;

    var query = `
    INSERT INTO Sprint (SprintID, SprintName, sprintNum, Description, StartDate, EndDate, ProjectID)
    VALUES ("${inputsprintID}", "${inputsprintname}", "${inputSprintNumber}", "${inputsprintdesc}","${inputstartdate}", "${inputenddate}", "${inputprojectID}")
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
  // Fetch all the sprints from the database
  var query = 'SELECT * FROM Sprint';

  database.query(query, function(error, sprints) {
    if (error) {
      throw error;
    } else {
      // Render the view with the list of sprints
      res.render('allsprints', { sprints });
    }
  });
});







module.exports = router;
