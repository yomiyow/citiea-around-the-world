const mysql = require('mysql');
const express = require('express');
const fs = require('fs');

// Create connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2022100960Romeo',
  database: 'world'
});

// Query
const sql = 'SELECT * FROM city';

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

  con.query(sql, (err, result) => {
    if (err) throw err;
    const jsonResult = JSON.stringify(result, null, 2);
    fs.writeFile('cities.json', jsonResult, (err) => {
      if (err) throw err;
      console.log('Result saved to cities.json');
    }); // getting data from database ...
  });

  console.log('Done!');
});