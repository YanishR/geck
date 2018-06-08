var http = require('http'),
	url = require('url'),
	connect = require('connect'),
	serveStatic = require('serve-static'),
	fs = require('fs');

/*http.createServer(function (req, res){
	fs.readFile('index.html', function(err, data){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data);
		res.end();
	});

}).listen(8080);*/

connect().use(serveStatic(__dirname)).listen(8080, function(){
	console.log('Server running on 8080...');
});