var http = require('http'),
	url = require('url'),
	fs = require('fs');

function css(req, res){
	if (request.url === '/style.css'){
		response.writeHead(200, {'Content-Type' : 'text/css'});
		var fileContents = fs.readFileSync('./views/style.css', {encoding: 'utf8'});
		response.write(fileContents);
	}
}


var server = http.createServer(function (req, res){
	router.css(req, res);
	router.home(req, res);
	router.user(req, res);

});

http.createServer(function (req, res){
	fs.readFile('index.html', function(err, data){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data);
		res.end();
	});
});




server.listen(8080);