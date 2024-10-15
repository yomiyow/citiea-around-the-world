const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

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

// http request
app.get('/api/cities', (request, response) => {
  const sql = 'SELECT * FROM city';
  con.query(sql, (err, result) => {
    if (err) {
      response.status(404).send('Errror retrieving data!');
    } else {
      response.json(result);
    }
  });
});

// create a get request
// retrieve data from database
// save the data to url with endpoint /api/cities

app.listen(port, () => console.log('Listening to port 3000...'));



