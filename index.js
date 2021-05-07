const express = require('express');
const leaders = require('./leaders')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});