const { parseJwtToken } = require('../utils/auth');

exports.sendResponse = (req, res) => res.status(200).send(req.data);

exports.isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization &&
    req.headers.authorization.split(' ');

  if (!token || !token[1]) {
    return next({ status: 400, message: 'Bad Request' });
  }

  parseJwtToken(token[1])
    .then(data => {
      req.user = data;
      return next();
    })
    .catch(() => next({ status: 400, message: 'Bad Request' }));
};
