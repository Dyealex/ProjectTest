// testing a database test....
// mydatabasetest.js



var express = require('express');
var mysql = require('mysql');
var app = express();

// const {
//     createConnection
// } = require('mysql');


var connection = mysql.createConnection( {
         

            //  properties
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'bookstoretwo'
        });
        
        connection.query('SELECT * FROM bookstoretwo', (err, result) => {
                    if (err) {
                        console.log("I knew it would not work but at least it is doing something...");
                        // ^^^works to here which translate to "it does not work!!!!"
                    } 
                     return console.log (result);
                });

               
                app.get('/', function(req, resp) {
                        connection.query('SELECT * FROM bookstoretwo', function(error, rows, fields) {
                            if (!!error) {
                                console.log('Error in query');
                            } else {
                                console.log ('Query successful!');
                            }
                        })
                    });
                    app.listen(5000)
//  const connection = createConnection ({
// var express = require('express');
//  var mysql = require('mysql');
// var app = express();
//  var connection = mysql.createConnection(
//      {
//         //  properties
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'bookstoretwo'}
//  );


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

// connection.connect(function(error){
//     if (!!error) {
//         console.log('Error in this field');
//     } else {
//         console.log ('connected');
//     }
// });

// app.listen(5000)
