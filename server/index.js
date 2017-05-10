const express = require('express');
const chalk = require('chalk');
const config = require('./config/environment');
const mongoose = require('mongoose');
const ripe = require('ripe');

mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = require('bluebird');

const app = express();
const server = require('http').createServer(app);

require('./config/express')(app);
require('./routes')(app);

server.listen(config.port, config.ip, () => {
  console.log(
    chalk.red('\nExpress server listening on port ') + chalk.yellow('%d') + chalk.red(', in ') + chalk.yellow('%s') + chalk.red(' mode.\n'),
    config.port,
    app.get('env')
  );

  if (config.env === 'development') {
    ripe.ready();
  }
});

module.exports = server;
