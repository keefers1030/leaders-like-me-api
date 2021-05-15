const Sequelize = require('sequelize')
const leadersModel = require('./leaders')

const connection = new Sequelize('leaders', 'leaders', 'password123',
  { host: 'localhost', dialect: 'mysql' })

const leaders = leadersModel(connection, Sequelize)

module.exports = { leaders }

