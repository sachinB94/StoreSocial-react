const express = require('express');
const router = express.Router();

const middleware = require('../middleware');
const controller = require('./controller');

router.post('/signup', controller.signup, middleware.sendResponse);
router.post('/signin', controller.signin, middleware.sendResponse);
router.get(
  '/current',
  middleware.isAuthenticated,
  controller.current,
  middleware.sendResponse
);

module.exports = router;
