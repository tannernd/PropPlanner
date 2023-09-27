const router = require('express').Router();
// -- property models
const { User, Expense, Financial, Income, Market, Mortgage, Property } = require('../../../models')
// -- routes
const expenseRoutes = require('./expenseRoutes');
const incomeRoutes = require('./incomeRoutes');
const marketRoutes = require('./marketRoutes');
const mortgageRoutes = require('./mortgageRoutes');
const financialRoutes = require('./financialRoutes');

router.use('/expense', expenseRoutes);
router.use('/income', incomeRoutes);
router.use('/market', marketRoutes);
router.use('/mortgage', mortgageRoutes);
router.use('/financial', financialRoutes);

// -- get property information
router.get('/:id', async (req, res) => {
    try {
        const property = await Property.findByPk(req.params.id,{
            include: [{ model: Expense }, { model: Financial }, { model: Income }, { model: Market }, { model: Mortgage }]});
        const propertyData = property.get({plain:true})

        res.status(200).json(propertyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- add a property
router.post('/', async (req, res) => {
    try {
        const property = await Property.create(req.body);
        const propertyData = property.get({ plain: true })
        console.log(property)
        console.log(propertyData)

        res.status(200).json(propertyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- update a property
router.put('/:id', async (req, res) => {
    try {
        const property = await Property.update(req.body, {
            where: {
                id: req.params.id,
            }
        });

        (property[0]) ? res.status(200).json({msg: 'Property successfully updated.'}) : res.status(400).json({msg: 'Property failed to update, check request.'});
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- delete a property
router.delete('/:id', async (req, res) => {
    try {
        const property = await Property.destroy({
            where: {
                id: req.params.id,
            }
        });

        (property) ? res.status(200).json({ msg: 'Found and deleted property.' }) : res.status(400).json({ msg: 'Property not found or has already been deleted.' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;