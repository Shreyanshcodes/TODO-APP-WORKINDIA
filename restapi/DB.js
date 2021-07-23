var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost:3307',
  user: 'admin',
  password: 'admin',
  database: 'todo'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected!');
  con.query("CREATE DATABASE todo", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

module.exports = connection;