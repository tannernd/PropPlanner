const router = require('express').Router();
const PropertyObj = require('../lib/PropertyObj')
const { Expense, Financial, Income, Market, Mortgage, Property } = require('../models');
const withAuth = require('../utils/auth')

// Homepage Route
router.get('/', (req, res, next) => {
  res.render('home', {loggedIn: req.session.logged_in});
});

// Reports Route
router.get('/reports/:id', async (req, res, next) => {
  //Get the peoperty object by the parameter ID
  const property = Property.findByPk(req.params.id,{
    include: [{ model: Expense }, { model: Financial }, { model: Income }, { model: Market }, { model: Mortgage }]})
    .then( (property) => {
      //serialize the data
      const propertyData = property.get({plain:true});
      //create a new PropertyOject and run the getAllReports method to get the object with the reports data
      const propertyObj =  new PropertyObj(propertyData);
      const propertyReports = propertyObj.getAllReports();
      res.render('reports',{ layout: false, propertyReports, loggedIn: req.session.logged_in });
    });
});

//Add a property route
router.get('/addproperty', withAuth, async (req, res, next) => { 
  res.render('addproperty');
});

//Member Dashboard route
router.get('/dashboard', withAuth, async (req, res, next) => { 
    const properties = Property.findAll({where: {user_id:req.session.user_id}})
    .then( (property) => {
      let propertyData = [];
      if (property === undefined || property.length === 0) {
        propertyData = [];
      } else {
        propertyData = property.map((prop) => prop.get({ plain: true }));
      
      }      
      res.render('dashboard', {propertyData, loggedIn: req.session.logged_in});
    });
});

//Login Route
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the dashboard
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

//Signup route
router.get('/signup', (req, res) => {
  // If a session exists, redirect the request to the dashboard
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

module.exports = router;