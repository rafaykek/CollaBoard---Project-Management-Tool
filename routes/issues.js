const express = require('express');
const router = express.Router();
var database = require("../database")
// Define the value of action variable
// Render the view with the defined action variable

const title = "hello";
// Render login form
router.get('/', function(req, res, next) {
  res.render('issueFormCustomer', { action : 'addissue' }); // load the index.ejs file

});

router.post("/", function(req, res)
 {
    var inputissuetitle = req.body.inputissuetitle;
    var inputissuedesc = req.body.inputissuedesc;
    var inputtypeissue = req.body.inputtypeissue;
    var inputreportedby = req.body.inputreportedby;
    var inputprojID = req.body.inputprojID;
    var inputstartdate = req.body.inputstartdate;

    var query = `
    INSERT INTO Issue (Title, Description, Type,ReportedBy,ProjectID, DueDate)
    VALUES ("${inputissuetitle}", "${inputissuedesc}", "${inputtypeissue}", "${inputreportedby}","${inputprojID}", "${inputstartdate}")
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
  // Fetch all the issues from the database
  var query = 'SELECT * FROM Issue';

  database.query(query, function(error, issues) {
    if (error) {
      throw error;
    } else {
      // Render the view with the list of issues
      res.render('allIssues', { issues });
    }
  });
});


module.exports = router;
