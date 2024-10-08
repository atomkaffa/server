const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index'));
});


app.get('/experience', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Experience.html'));
});


app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Projects.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Contact.html'));
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});