const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
  res.render('addHome', {
    pageTitle: 'Add Home to airbnb',
    currentPage: 'addHome',
  });
};

exports.postAddHome = (req, res, next) => {
  // const home = new Home(req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl);

  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render('homeAdded', {
    pageTitle: 'Home Added Successfully',
    currentPage: 'homeAdded',
  });
};

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll();
  res.render('home', {
    registeredHomes: registeredHomes,
    pageTitle: 'airbnb Home',
    currentPage: 'Home',
  });
};
