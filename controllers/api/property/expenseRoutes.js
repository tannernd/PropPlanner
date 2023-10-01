const router = require('express').Router();
// -- expense model
const Expense = require('../../../models/Expense');

// -- get an expense
router.get('/:id', async (req, res) => {
    try {
        const expense = await Expense.findByPk(req.params.id);
        const expenseData = expense.get({ plain: true });
        (expenseData) ? res.status(200).json(expenseData) : res.status(400).json({msg: 'expense failed to get, check request.'});
    } catch (err) {
        res.status(500).json(err);
    }
});
// -- add an expense
router.post('/', async (req, res) => {
    try {
        const expense = await Expense.create(req.body);
        const expenseData = expense.get({ plain: true })

        res.status(200).json(expenseData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- update an expense
router.put('/:id', async (req, res) => {
    try {
        const expense = await Expense.update(req.body, {
            where: {
                id: req.params.id,
            }
        });

        (expense[0]) ? res.status(200).json({msg: 'Expense successfully updated.'}) : res.status(400).json({msg: 'Expense failed to update, check request.'});
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- delete an expense
router.delete('/:id', async (req, res) => {
    try {
        const expense = await Expense.destroy({
            where: {
                id: req.params.id,
            }
        });

        (expense) ? res.status(200).json({ msg: 'Found and deleted expense.' }) : res.status(400).json({ msg: 'Expense not found or has already been deleted.' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;