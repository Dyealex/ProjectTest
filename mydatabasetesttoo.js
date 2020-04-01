var express = require('express');
 var mysql = require('mysql');
var app = express();
 var connection = mysql.createConnection(
     {
        //  properties
        host: 'localhost',
        user: 'Diane Alexander',
        password: '2020QueMeUp',
        database: 'bookstoretwo'}
 );

connection.connect(function(error){
    if (!!error) {
        console.log('Error');
    } else {
        console.log ('connected');
    }
});

// app.get('/', function(req, resp) {
//     connection.query('SELECT * FROM bookstoretwo', function(error, rows, fields) {
//         if (!!error) {
//             console.log('Error in query');
//         } else {
//             console.log ('Query successful!');
//             // parse with rows/fields
//         }
//     })
// })
// app.listen(3306)
