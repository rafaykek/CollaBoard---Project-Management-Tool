const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'PROJECT_FINAL_',
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