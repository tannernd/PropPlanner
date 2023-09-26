const router = require('express').Router();
// -- expense model
const Mortgage = require('../../../models/Mortgage');

// -- add an expense
router.post('/', async (req, res) => {
    try {
        const mortgage = await Mortgage.create(req.body);
        const mortgageData = mortgage.get({ plain: true })

        res.status(200).json(mortgageData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- update an expense
router.put('/:id', async (req, res) => {
    try {
        const mortgage = await Mortgage.update(req.body, {
            where: {
                id: req.params.id,
            }
        });

        (mortgage[0]) ? res.status(200).json({msg: 'Mortgage successfully updated.'}) : res.status(400).json({msg: 'Mortgage failed to update, check request.'});
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- delete an expense
router.delete('/:id', async (req, res) => {
    try {
        const mortgage = await Mortgage.destroy({
            where: {
                id: req.params.id,
            }
        });

        (mortgage) ? res.status(200).json({ msg: 'Found and deleted mortgage.' }) : res.status(400).json({ msg: 'Mortgage not found or has already been deleted.' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;