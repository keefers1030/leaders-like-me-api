/* eslint-disable no-console */
const models = require('../models')

const getAllLeaders = async (req, res) => {
  const leaders = await models.leaders.findAll()

  return res.send(leaders)
}

const getLeaderSlug = async (req, res) => {
  try {
    const { slug } = req.params

    const leaders = await models.leaders.findOne({ where: { slug } })

    return leaders
      ? res.send(leaders)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve leader, please try again')
  }
}

const addNewLeader = async (req, res) => {
  const {
    name, movie, slug
  } = req.body

  if (!name || !movie || !slug) {
    res.status(400).send('Must contain name, movie, and slug')
  }

  const newVillain = { name, movie, slug }

  const villain = await models.leaders.create(newVillain)

  return res.status(201).send(villain)
}

module.exports = { getAllLeaders, getLeaderSlug, addNewLeader }
