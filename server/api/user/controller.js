const CryptoJS = require('crypto-js');
const omit = require('lodash.omit');

const User = require('./model');

const { getJwtToken } = require('../../utils/auth');
const { PASSWORD_SECRET_KEY } = require('../../config/environment');

exports.signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const cipher = CryptoJS.AES.encrypt(password, PASSWORD_SECRET_KEY).toString();

  let user;

  User.findOne({ email })
    .then(user => {
      if (user) {
        throw new Error('Email already exists');
      }

      return User.add({ name, email, password: cipher });
    })
    .then(u => {
      user = omit(u, ['password']);
      return getJwtToken({ _id: user._id, role: 'user' });
    })
    .then(token => {
      req.data = { user, token };
      return next();
    })
    .catch(next);
};

exports.signin = (req, es, next) => {
  const { email, password } = req.body;

  let user;

  User.findOne({ email })
    .then(u => {
      user = u;
      if (!user) {
        throw new Error('Email not found');
      }

      const userPassword = CryptoJS.AES
        .decrypt(user.password, PASSWORD_SECRET_KEY)
        .toString(CryptoJS.enc.Utf8);

      if (userPassword !== password) {
        throw new Error('Invalid Password');
      }

      user = omit(user, ['password']);
      return getJwtToken({ _id: user._id, role: 'user' });
    })
    .then(token => {
      req.data = { user, token };
      return next();
    })
    .catch(next);
};

exports.current = (req, res, next) => {
  console.log('req.user', req.user);

  User.findOne({ _id: req.user._id })
    .then(user => {
      req.data = omit(user, ['password']);
      return next();
    })
    .catch(next);
};
