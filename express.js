const con = require('./db-connection.js');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// http request
app.get('/cities', (request, response) => {
  const sql = 'SELECT * FROM city';
  con.query(sql, (err, result) => {
    if (err) {
      response.status(404).send('Errror retrieving data!');
    } else {
      response.json(result);
    }
  });
});

app.listen(port, () => console.log(`Server running at port ${port}`));
