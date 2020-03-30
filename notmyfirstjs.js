var http = require('http');
// making some changes that are in the app.js file to see if they work here
var hostname = '127.0.0.1';
var port = 5000;




var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Go FUCK yourself!!!!! I tried to change this to an h1 tag to make a nice bold statement but it will not let me. From the console, you just run the js files by typing node and the file name. none of the sites will tell you this. And franly, I have no idea how I finally figured it out. once you run the file you then type control c to get back to where you were. I tried to just refresh the page to get the text I just added but I had to go back to the terminal and run it again.More interesting facts, if you click on view page source, all it shows is the text, not the js file it is getting it from.');
})
// .listen(5000);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});