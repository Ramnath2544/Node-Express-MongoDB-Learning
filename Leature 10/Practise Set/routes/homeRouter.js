// Core Modules
const path = require('path');

// Express Modules
const express = require('express');

// Local Modules
const rootDir = require('../utils/pathUtil');

const homeRouter = express.Router();

homeRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = homeRouter;
