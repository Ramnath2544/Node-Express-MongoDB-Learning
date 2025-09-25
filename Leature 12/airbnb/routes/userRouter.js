// Core Modules
const path = require('path');

// External Modules
const express = require('express');
const userRouter = express.Router();

// Local Modules
const rootDir = require('../utils/pathUtil');
const { registeredHomes } = require('./hostRouter');

userRouter.get('/', (req, res, next) => {
  console.log(registeredHomes);
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = userRouter;
