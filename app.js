const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
	res.send('Hello world!');
});
app.get('/demo', (req,res) => {
	res.status(418);
	res.set('X-Alien-Power', 'Mothership')
	res.send('Hello Earthlings!');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

