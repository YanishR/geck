const express = require('express'),
	path = require('path');

const app = new express();

app.use(express.static(path.join(__dirname + '/public')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));