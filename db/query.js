const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'some password',
  datbase: 'my_db'
});

connection.connect(function(err){
  if(err){
    console.log('Error while connectiong to database', err); 
  } else {
    console.log("Successful connection to database");
  } 
});

// this query only serves as a sanity check to see
// if there is indeed a connection 
connection.query('SELECT 1 + 1 AS solution', function(err, res,fields) {
  if(err){
    console.log("error in query");
    throw err;
  } else {
    console.log("The solution is: ", res[0].solution);
  }
});

connection.end();

