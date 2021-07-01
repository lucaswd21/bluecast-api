const express = require('express');
const router = express.Router();
const Client = require('../models/client');

router.get('/client', (req, res) => {
  try {
    Client.find({}).then((clients) => {
      res.send(clients)
      next()
    })
  } catch (error) {
    throw error
    next()
  }
})
router.post('/client', (req, res, next) => {
  try {
    Client.create(req.body).then((client) => {
      res.send(client);
      next()
    })
  } catch (error) {
    throw error
    next()
  }
})

module.exports = router ;