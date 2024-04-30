var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response){

	var query = "SELECT * FROM northwind.Customers; ";
	// ORDER BY id DESC

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data', {title:'Node.js MySQL CRUD Application', action:'list', sampleData:data, message:request.flash('success')});
		}

	});

});

router.get("/add", function(request, response){

	response.render("sample_data", {title:'Insert Data into MySQL', action:'add'});

});

router.post("/add_sample_data", function(request, response){

	var companyname = request.body.companyname;

	var contactname = request.body.contactname;

	var title = request.body.title;

	var address = request.body.address;

	var city = request.body.city;

	var postal = request.body.postal;

	var country = request.body.country;

	var phone = request.body.phone;

	var fax = request.body.fax;

	var query = `
    INSERT INTO Customers 
	(CompanyName, ContactName, ContactTitle, Address,City,Region,PostalCode,Country,Phone,Fax) 
	VALUES ("${companyname}", "${contactname}", "${title}", "${address}","${city}","${postal}", "${country}","${phone}", "${fax}")
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			request.flash('success', 'Sample Data Inserted');
			response.redirect("/sample_data");
		}

	});

});

// router.get('/edit/:id', function(request, response, next){

// 	var id = request.params.id;

// 	var query = `SELECT * FROM sample_data WHERE id = "${id}`;

// 	database.query(query, function(error, data){

// 		response.render('sample_data', {title: 'Edit MySQL Table Data', action:'edit', sampleData:data[0]});

// 	});

// });

// router.post('/edit/:id', function(request, response, next){

// 	var id = request.params.id;

// 	var first_name = request.body.first_name;

// 	var last_name = request.body.last_name;

// 	var age = request.body.age;

// 	var gender = request.body.gender;

// 	var query = `
// 	UPDATE sample_data 
// 	SET first_name = "${first_name}", 
// 	last_name = "${last_name}", 
// 	age = "${age}", 
// 	gender = "${gender}" 
// 	WHERE id = "${id}
	
// 	`;
// 	// WHERE id = "${id}"
// 	database.query(query, function(error, data){

// 		if(error)
// 		{
// 			throw error;
// 		}
// 		else
// 		{
// 			request.flash('success', 'Sample Data Updated');
// 			response.redirect('/sample_data');
// 		}

// 	});

// });

// router.get('/delete/:id', function(request, response, next){

// 	var id = request.params.id; 

// 	var query = `
// 	DELETE FROM sample_data WHERE id = "${id}"
// 	`;

// 	database.query(query, function(error, data){

// 		if(error)
// 		{
// 			throw error;
// 		}
// 		else
// 		{
// 			request.flash('success', 'Sample Data Deleted');
// 			response.redirect("/sample_data");
// 		}

// 	});

// });

module.exports = router;