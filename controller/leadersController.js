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

const getLeaderCommunity = async (req, res) => {
  try {
    const { community } = req.params

    const leaders = await models.leaders.findAll({ where: { community } })
    return leaders
      ? res.send(leaders)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve leader, please try again')
  }
}

const getLeaderCategory = async (req, res) => {
  try {
    const { category } = req.params

    const leaders = await models.leaders.findAll({ where: { category } })

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

  const newLeader = { name, movie, slug }

  const leader = await models.leaders.create(newLeader)

  return res.status(201).send(leader)
}

module.exports = { getAllLeaders, getLeaderSlug, getLeaderCommunity, getLeaderCategory, addNewLeader }
