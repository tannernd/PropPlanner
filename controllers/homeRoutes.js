const router = require('express').Router();
const PropertyObj = require('../lib/PropertyObj')
const { Expense, Financial, Income, Market, Mortgage, Property } = require('../models');

// -- testing routes
router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/reports/:id', async (req, res, next) => {
  const property = Property.findByPk(req.params.id,{
    include: [{ model: Expense }, { model: Financial }, { model: Income }, { model: Market }, { model: Mortgage }]})
    .then( (property) => {
        const propertyData = property.get({plain:true})
        const propertyObj =  new PropertyObj(propertyData);
        const propertyReports = propertyObj.getAllReports();
        console.log(propertyReports);
        res.render('reports',{ layout: false, propertyReports });
    });
})

module.exports = router;