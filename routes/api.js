const express = require('express');
const router = express.Router();
const Client = require('../models/client');

router.get('/client', async (req, res) => {
  try {
    await Client.find({}).then((clients) => {
      res.send(clients)
      next()
    })
  } catch (error) {
    throw error
  }
})
router.post('/client', async (req, res, next) => {
  try {
    await Client.create(req.body).then((client) => {
      res.send(client);
      next()
    })
  } catch (error) {
    throw error
  }
})

module.exports = router ;