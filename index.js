const express = require('express'),
	path = require('path')
	body = require('body-parser'),
	fs = require('fs');

const app = new express();

app.use(express.static(path.join(__dirname + '/public')));
app.use(body.urlencoded({ extended : true}));

//To handle email form
app.post('/', (req, res) => {
	res.send("Your email is " + req.body.email);
	fs.appendFile(path.join(__dirname)+'/data/emails.txt', req.body.email, () => {
		console.log("Saved");
	});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
