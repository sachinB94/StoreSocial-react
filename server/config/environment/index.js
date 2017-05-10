const path = require('path');
const merge = require('lodash.merge');

const envConfig = require(`./${process.env.NODE_ENV || 'development'}.js`);

const all = {
  env: process.env.NODE_ENV || 'development',
  root: path.join(__dirname, '/../..'),
  port: process.env.PORT || 9000,

  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  PASSWORD_SECRET_KEY: 'StoreSocial',
  JWT_SECRET_KEY: 'StoreSocial'
};

module.exports = merge(all, envConfig);
