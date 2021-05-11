const express = require('express');
const leaders = require('./leaders')
// const { getAllLeaders, getLeaderName, getCategory, addNewLeader } = require('./controller/leadersController.js')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index');
});

//app.get('/leaders/:slug', getLeader)

//app.post('/leaders', express.json(), addNewLeader)

app.get('/api-doc', (req, res) => {
  res.render('api-doc');
});

app.use('/public', express.static(__dirname + "/public"));

app.all('*', (req, res) => {
  return res.sendStatus(404)
})

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});






