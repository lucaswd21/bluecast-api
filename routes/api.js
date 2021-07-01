const express = require('express');
const router = express.Router();
const Client = require('../models/client');

router.get('/client', (req, res) => {
  Client.find({}).then((clients) => {
    res.send(clients)
  })
})
router.post('/client', (req, res, next) => {
  Client.create(req.body).then((client) => {
    res.send(client);
  }).catch(next)
})

module.exports = router ;