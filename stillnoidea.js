// following a video to connect database...not sure why i try...


const mysql = require('mysql');
const express = require('express');
var app = express();
// const bodyparser = require('simple-bodyparser');

// app.use(bodyparser.JSON());
 var mysqlConnection = mysql.createConnection ({
     host: 'localhost',
     user: 'root',
     password: '2020QueMeUp',
     database: 'notcreatedyet'
 })
 mysqlConnection.connect((err) => {
     if (!err)
     console.log('DB connection succeded.');
     else
     console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
 })

 app.listen(5000,() => console.log('No way this will work...at port no : 5000'))