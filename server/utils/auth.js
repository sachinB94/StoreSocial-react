const jwt = require('jsonwebtoken');
const Bluebird = require('bluebird');

const { JWT_SECRET_KEY } = require('../config/environment');

exports.getJwtToken = data =>
  new Bluebird((resolve, reject) =>
    jwt.sign(
      data,
      JWT_SECRET_KEY,
      {},
      (err, token) => err ? reject(err) : resolve(token)
    ));

exports.parseJwtToken = token =>
  new Bluebird((resolve, reject) =>
    jwt.verify(
      token,
      JWT_SECRET_KEY,
      (err, data) => err ? reject(err) : resolve(data)
    ));
