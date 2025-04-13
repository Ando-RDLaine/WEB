// This file is just a basic reference for how a Node.js server might handle a POST request.
// You do NOT need to run this to use the form.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  // Here you would normally validate and save the data.
  console.log('Received registration:', name, email);
  res.json({ message: 'Registration received!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
