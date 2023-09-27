const router = require('express').Router();
const userRoutes = require('./userRoutes');
const propertyRoutes = require('./property');

router.use('/users', userRoutes);
router.use('/property', propertyRoutes);

module.exports = router;