const express = require('express');
const router = express.Router();

const middleware = require('../middleware');
const controller = require('./controller');

router.post(
  '/',
  middleware.isAuthenticated,
  controller.add,
  middleware.sendResponse
);

router.get(
  '/',
  middleware.isAuthenticated,
  controller.getContacts,
  middleware.sendResponse
);

router.put(
  '/:contactId',
  middleware.isAuthenticated,
  controller.edit,
  middleware.sendResponse
);

router.delete(
  '/:contactId',
  middleware.isAuthenticated,
  controller.delete,
  middleware.sendResponse
);

module.exports = router;
