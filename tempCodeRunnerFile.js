const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'northwind',
	user : 'rafaynew',
	password : '12345678'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;