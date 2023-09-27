const router = require('express').Router();
const Property = require('../../models/Property');
const Expenses = require('../../models/Expenses');
const Income = require('../../models/Income');
const Market = require('../../models/Market');
const Mortgage = require('../../models/Mortgage');
const { Financials } = require('../../models');

//Post requests to save table data to the DB.
router.post('/', async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.post('/expenses', async (req, res) => {
    try {
        const expenses = await Expenses.create(req.body);
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    } 
});

router.post('/financials', async (req, res) => {
    try {
        const financials = await financials.create(req.body);
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.post('/income', async (req, res) => {
    try {
        const income = await Income.create(req.body);
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.post('/market', async (req, res) => {
    try {
        const market = await Market.create(req.body);
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    } 
});

router.post('/mortgage', async (req, res) => {
    try {
        const mortgage = await Mortgage.create(req.body);
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }   
});

//Put requests to save table data to the DB.
router.put('/:id', async (req, res) => {
    try {
        const property = await Property.update(req.body, {
            where: {
              prop_id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.put('/expenses/:id', async (req, res) => {
    try {
        const expenses = await Expenses.update(req.body, {
            where: {
              exp_id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }   
});

router.put('/financials/:id', async (req, res) => {
    try {
        const financials = await financials.update(req.body, {
            where: {
              id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    } 
});

router.put('/income/:id', async (req, res) => {
    try {
        const income = await Income.update(req.body, {
            where: {
              inc_id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.put('/market/:id', async (req, res) => {
    try {
        const market = await Market.update(req.body, {
            where: {
              id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.put('/mortgage/:id', async (req, res) => {
    try {
        const mortgage = await Mortgage.update(req.body, {
            where: {
              id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

//Delete requests to delete table data to the DB.
router.delete('/:id', async (req, res) => {
    try {
        const property = await Property.destroy({
            where: {
              prop_id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }   
});

router.delete('/expenses/:id', async (req, res) => {
    try {
        const expenses = await Expenses.destroy({
            where: {
              exp_id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.delete('/financials/:id', async (req, res) => {
    try {
        const financials = await financials.destroy({
            where: {
              id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }   
});

router.delete('/income/:id', async (req, res) => {
    try {
        const income = await Income.destroy({
            where: {
              inc_id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.delete('/market/:id', async (req, res) => {
    try {
        const market = await Market.destroy({
            where: {
              id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.delete('/mortgage/:id', async (req, res) => {
    try {
        const mortgage = await Mortgage.destroy({
            where: {
              id: req.params.id,
            }
          });
        res.json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }  
});

//Get Property Information
router.get('/:id', (async (req, res) => {
    try {
        const property = await Property.findByPk(req.params.id,{
            include: [{ model: Expenses }, { model: Financials }, { model: Income }, { model: Market }, { model: Mortgage }]});
        const propertyData = property.get({plain:true})
        
        res.json(propertyData);
    } catch (err) {
        res.status(500).json(err);
    }
}));

module.exports = router;