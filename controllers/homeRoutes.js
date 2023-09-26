const router = require('express').Router();

// -- testing routes
router.get('/', (req, res, next) => {
  res.render('home');
});

module.exports = router;