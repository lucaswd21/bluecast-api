const express = require('express');
const routes =  require('./routes/api.js');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()

mongoose.connect('mongodb://localhost/tryiotest', { useNewUrlParser:true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Access-Control-Allow-Origin, Accept, Authorization");
    next();
  });

  app.use(express.json());

  app.use('/api', routes);

  app.use((err, req, res, next) => {
    res.status(422).send({error: err.message})
  })

  var server_port = process.env.PORT || 80;
  var server_host = process.env.HOST || '0.0.0.0';

  app.listen(server_port, server_host, () => {
    console.log('Server online!')
  });
