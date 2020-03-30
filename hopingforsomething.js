// hopingforsomething.js


var fs = require('fs');
var date = fs.readFileSync('words.json');
var words = json.parse(data)
console.log(words)


var express = require('express');
var app = express();
var server = app.listen(8080, listening);

function listening (){
    console.log('listening....')
}

app.get('/add/:word/:score?', addWord)

function addWord(request, response) {
    var data = request.parems;
    var word = data.word;
    var score = Number (data.score);
    var reply;
    if (!score) {
        reply= {
            msg: "Score is required."
        } else {
            words[word] = score;
            var data = JSON.stringify(words);
            fs.writeFile ('words.json', data, finished);
            function finished(err) {
                console.log('all set')
            }
            reply = {
                msg: "Thank you for your word."
            }
        }
    }
}