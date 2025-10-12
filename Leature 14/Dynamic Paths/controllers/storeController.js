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

exports.postAddToFavourite = (req, res, next) => {
  console.log('Came to add to Favourite', req.body);
  res.redirect('/favourites');
};

exports.getHomesDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log('Home not found');
      res.redirect('/homes');
    } else {
      res.render('store/home-details', {
        home: home,
        pageTitle: 'Home Detail',
        currentPage: 'homes',
      });
    }
  });
};
