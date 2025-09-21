// Core Modules
const path = require('path');

// Express Modules
const express = require('express');

// Local Modules
const rootDir = require('../utils/pathUtil');

const contactRouter = express.Router();

contactRouter.get('/contact-us', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

contactRouter.post('/contact-us', (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'contact-success.html'));
});

module.exports = contactRouter;
