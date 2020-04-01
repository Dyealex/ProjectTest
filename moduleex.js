// module experiment


// fs.writeFile()
// fs.write()
// one of these two should be what is needed.


    const express = require('express');
    const mysql = require('mysql');

    
    const db = mysql.createConnection({
        //  properties
    host: 'localhost',
    user: 'root',
    password: '2020QueMeUp',
    database: 'bookstoretwo'
    });
    db.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('connected to database');
        let sql = "INSERT INTO inventory (title, author, read, onaudible) VALUES ('The Count of Monte Cristo', 'Alexander Dumas', 'yes', 'no')"
        db.query(sql, (err, result) => {
if (err) throw err;
console.log('info logged')
        })
    })





