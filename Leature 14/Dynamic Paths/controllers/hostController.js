const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
  res.render('host/edit-home', {
    pageTitle: 'Add Home to airbnb',
    currentPage: 'addHome',
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';
  console.log(homeId, editing);
  
  res.render('host/edit-home', {
    pageTitle: 'Edit Your Home',
    currentPage: 'host-homes',
    editing: editing,
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render('host/host-home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Host Homes List',
      currentPage: 'host-homes',
    })
  );
};

exports.postAddHome = (req, res, next) => {
  // const home = new Home(req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl);

  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render('host/home-added', {
    pageTitle: 'Home Added Successfully',
    currentPage: 'homeAdded',
  });
};
