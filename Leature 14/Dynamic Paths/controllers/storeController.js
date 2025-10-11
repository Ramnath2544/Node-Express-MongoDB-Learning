const Home = require('../models/home');

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render('store/index', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'index',
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render('store/home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Homes List',
      currentPage: 'Home',
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render('store/bookings', {
    pageTitle: 'My Bookings',
    currentPage: 'bookings',
  });
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render('store/favourite-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'My Favorites',
      currentPage: 'favourites',
    })
  );
};

exports.getHomesDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('At home details page', homeId);
  res.render('store/home-details', {
    pageTitle: 'Home Detail',
    currentPage: 'Home',
  });
};
