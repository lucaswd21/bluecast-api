const express = require('express');
const router = express.Router();
const Client = require('../models/client');

router.get('/client', async (req, res) => {
  try {
    await Client.find({}).then((clients) => {
      res.send(clients)
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})
router.post('/client', async (req, res, next) => {
  try {
    await Client.create(req.body).then((client) => {
      res.send(client);
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})

module.exports = router ;