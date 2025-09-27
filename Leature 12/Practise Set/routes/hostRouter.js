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
  console.log('Home Registration successful for:', req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded', { pageTitle: 'Home Added Successfully' });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
