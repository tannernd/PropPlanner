const router = require('express').Router();
// -- expense model
const Income = require('../../../models/Income');

// -- add an income
router.post('/', async (req, res) => {
    try {
        const income = await Income.create(req.body);
        const incomeData = income.get({ plain: true })

        res.status(200).json(incomeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- update an income
router.put('/:id', async (req, res) => {
    try {
        const income = await Income.update(req.body, {
            where: {
                id: req.params.id,
            }
        });

        (income[0]) ? res.status(200).json({msg: 'Income successfully updated.'}) : res.status(400).json({msg: 'Income failed to update, check request.'});
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- delete an income
router.delete('/:id', async (req, res) => {
    try {
        const income = await Income.destroy({
            where: {
                id: req.params.id,
            }
        });

        (income) ? res.status(200).json({ msg: 'Found and deleted income.' }) : res.status(400).json({ msg: 'Income not found or has already been deleted.' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;