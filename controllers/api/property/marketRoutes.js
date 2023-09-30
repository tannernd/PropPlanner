const router = require('express').Router();
// -- expense model
const Market = require('../../../models/Market');

// -- add an expense
router.post('/', async (req, res) => {
    try {
        req.body.user_id = req.session.user_id; 
        const market = await Market.create(req.body);
        const marketData = market.get({ plain: true })

        res.status(200).json(marketData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- update an expense
router.put('/:id', async (req, res) => {
    try {
        const market = await Market.update(req.body, {
            where: {
                id: req.params.id,
            }
        });

        (market[0]) ? res.status(200).json({msg: 'Market successfully updated.'}) : res.status(400).json({msg: 'Market failed to update, check request.'});
    } catch (err) {
        res.status(500).json(err);
    }
});

// -- delete an expense
router.delete('/:id', async (req, res) => {
    try {
        const market = await Market.destroy({
            where: {
                id: req.params.id,
            }
        });

        (market) ? res.status(200).json({ msg: 'Found and deleted market.' }) : res.status(400).json({ msg: 'Market not found or has already been deleted.' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;