var express = require ('express');
var mysql = require ('mysql');

var app = express();
if (process.env.JAWSDB_URL) {
    var
}
var connection = mysql.createConnection({
host: 'localhost',
user:'root',
password: 'password',
database:'quotes_db'

});

var PORT = process.env.PORT||8080;
connection.connect(function(err){
    if (err) throw err;
    app.get('/',function(req,res){
        connection.query('SELECT * FROM quotes', function(err, data) {
            if (err) throw err;
            res.json(data)
        })
    })
    app.listen(PORT)
})