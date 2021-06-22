const express = require('express');
const leaders = require('./leaders')
const { getAllLeaders, getLeaderSlug, addNewLeader, getLeaderCategory, getLeaderCommunity } = require('./controller/leadersController.js')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/leaders', getAllLeaders)

app.get('/leaders/:slug', getLeaderSlug)

app.get('/leaders/category/:category', getLeaderCategory)

app.get('/leaders/community/:community', getLeaderCommunity)

app.post('/leaders', express.json(), addNewLeader)

app.get('/api-doc', (req, res) => {
  res.render('api-doc')
})

app.get('/leader', (req, res) => {
  res.render('leader')
});

app.use('/public', express.static(__dirname + "/public"));

app.all('*', (req, res) => {
  return res.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337...');
});
