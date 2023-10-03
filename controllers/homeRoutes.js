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
      res.render('reports',{ propertyReports, loggedIn: req.session.logged_in });
    });
});

//Add a property route
router.get('/addproperty', withAuth, async (req, res, next) => { 
  res.render('addproperty', {loggedIn: req.session.logged_in, user_id:req.session.user_id});
});

//View a property route
router.get('/property/:id', withAuth, async (req, res, next) => { 
  const property = await Property.findByPk(req.params.id,{
    include: [{ model: Expense }, { model: Financial }, { model: Income }, { model: Market }, { model: Mortgage }]})
  let propertyData = [];
  if (property === undefined || property === null || property.length === 0 ) {
    propertyData = [];
  } else {
    propertyData = property.get({plain:true});
  }  
  res.render('property', {propertyData, loggedIn: req.session.logged_in, user_id:req.session.user_id});
});

//Member Dashboard route
router.get('/dashboard', withAuth, async (req, res, next) => { 
    const properties = await Property.findAll({
      include: [{ model: Expense }, { model: Financial }, { model: Income }, { model: Market }, { model: Mortgage }]});
      
      let propertyData = [];
      if (properties === undefined || properties.length === 0) {
        propertyData = [];
      } else {
        propertyData = properties.map((prop) => prop.get({ plain: true }));
      }      
      res.render('dashboard', {propertyData, loggedIn: req.session.logged_in});
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