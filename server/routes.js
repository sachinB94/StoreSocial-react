const { getMongoError } = require('./utils/mongoError');

const userApi = require('./api/user');

module.exports = app => {
  // API
  app.use('/api/users', userApi);

  app.use((err, req, res, next) => {
    if (err.name === 'MongoError' || err.name === 'ValidationError') {
      return res.status(err.status || 500).send(getMongoError(err));
    }
    if (err.stack) {
      return res.status(500).send({ status: 500, message: err.message });
    }
    return res.status(err.status || 500).send(err);
  });
};
