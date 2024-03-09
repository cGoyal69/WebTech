const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  res.redirect('/submission?name=' + encodeURIComponent(req.body.name));
});

app.get('/submission', (req, res) => {
  res.sendFile(__dirname + '/submission.html');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});