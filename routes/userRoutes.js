const router = require('express').Router()
const { User } = require('../models')

// GET all users
router.get('/users', (req, res) => {
  User.findAll()
    .then(users => { res.json(users) })
    .catch(err => console.log(err))
})

// GET one user
router.get('/users/:id', (req, res) => {
  User.findOne({ id: req.params.id })
    .then(user => { res.json(user) })
    .catch(err => console.log(err))
})

// POST a user
router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => { res.json(user) })
    .catch(err => console.log(err))
})

// PUT a user
router.put('/users/:id', (req, res) => {
  User.update(req. body, { where: { id: req.params.id } })
    .then(() => { res.sendStatus(200) })
    .catch(err => console.log(err))
})

// DELETE a user
router.delete('/users/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => { res.sendStatus(200) })
    .catch(err => console.log(err))
})

module.exports = router
