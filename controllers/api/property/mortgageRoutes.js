const router = require('express').Router();
// -- mortgage model
const Mortgage = require('../../../models/Mortgage');

// -- get a mortgage
router.get('/:id', async (req, res) => {
    try {
        const mortgage = await Mortgage.findByPk(req.params.id);
        const mortgageData = mortgage.get({ plain: true });
        (mortgageData) ? res.status(200).json(mortgageData) : res.status(400).json({msg: 'mortgage failed to get, check request.'});
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- add an mortgage
router.post('/', async (req, res) => {
    try {
        const mortgage = await Mortgage.create(req.body);
        const mortgageData = mortgage.get({ plain: true })

        res.status(200).json(mortgageData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- update an mortgage
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

// -- delete an mortgage
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