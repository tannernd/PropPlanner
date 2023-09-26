const router = require('express').Router();
const Property = require('../../models/Property');
const Expenses = require('../../models/Expenses');
const Income = require('../../models/Income');
const Market = require('../../models/Market');
const Mortgage = require('../../models/Mortgage');

//Post requests to save table data to the DB.
router.post('/', async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.json(req.body);
    } catch {(err) => {
        res.json(err);
        }
    }   
});

router.post('/expenses', async (req, res) => {
    try {
        const expenses = await Expenses.create(req.body);
        res.json(req.body);
    } catch {(err) => {
        res.json(err);
        }
    }   
});

router.post('/financials', async (req, res) => {
    try {
        const financials = await financials.create(req.body);
        res.json(req.body);
    } catch {(err) => {
        res.json(err);
        }
    }   
});

router.post('/income', async (req, res) => {
    try {
        const financials = await Income.create(req.body);
        res.json(req.body);
    } catch {(err) => {
        res.json(err);
        }
    }   
});

router.post('/market', async (req, res) => {
    try {
        const financials = await Market.create(req.body);
        res.json(req.body);
    } catch {(err) => {
        res.json(err);
        }
    }   
});

router.post('/mortgage', async (req, res) => {
    try {
        const financials = await Mortgage.create(req.body);
        res.json(req.body);
    } catch {(err) => {
        res.json(err);
        }
    }   
});

module.exports = router;