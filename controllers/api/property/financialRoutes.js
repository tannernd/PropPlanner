const router = require('express').Router();
// -- expense model
const Financial = require('../../../models/Financial');

// -- add a financial
router.post('/', async (req, res) => {
    try {
        const financial = await Financial.create(req.body);
        const financialData = financial.get({ plain: true })

        res.status(200).json(financialData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- update a financial
router.put('/:id', async (req, res) => {
    try {
        const financial = await Financial.update(req.body, {
            where: {
                id: req.params.id,
            }
        });

        (financial[0]) ? res.status(200).json({msg: 'Financial successfully updated.'}) : res.status(400).json({msg: 'Financial failed to update, check request.'});
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- delete a financial
router.delete('/:id', async (req, res) => {
    try {
        const financial = await Financial.destroy({
            where: {
                id: req.params.id,
            }
        });

        (financial) ? res.status(200).json({ msg: 'Found and deleted financial.' }) : res.status(400).json({ msg: 'Financial not found or has already been deleted.' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;