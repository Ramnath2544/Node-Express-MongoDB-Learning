// Core Modules
const path = require('path');

// External Modules
const express = require('express');
const hostRouter = express.Router();

// Local Modules
const rootDir = require('../utils/pathUtil');

hostRouter.get('/add-home', (req, res, next) => {
  res.render('addHome', { pageTitle: 'Add Home to airbnb' });
});

const registeredHomes = [];

hostRouter.post('/add-home', (req, res, next) => {
  res.render('homeAdded', { pageTitle: 'Home Added Successfully' });
  registeredHomes.push({ homeName: req.body.homeName });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
