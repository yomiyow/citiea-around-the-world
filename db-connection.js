const mysql = require('mysql');

// Create connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2022100960Romeo',
  database: 'world'
});

// Check if connected
con.connect((err) => {
  if (err) throw err;
  
  console.log('Connected successful!');  
});

module.exports = con;

