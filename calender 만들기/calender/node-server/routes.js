const path = require('path');
const express = require('express');
const controller = require('../node-server/controllers');
const router = express.Router();

router.use('/', controller.getRender);

module.exports = router;