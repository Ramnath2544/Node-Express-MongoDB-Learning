// Core Modules
const path = require('path');

// External Modules
const express = require('express');
const hostRouter = express.Router();

// Local Modules
const rootDir = require('../utils/pathUtil');

hostRouter.get('/add-home', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

const registeredHomes = [];

hostRouter.post('/add-home', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
  registeredHomes.push({ homeName: req.body.homeName });
  console.log('Home Registration successful for:', req.body, req.body.homeName);
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
