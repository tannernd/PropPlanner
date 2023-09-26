const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth')

//#region -- user create/update/delete
router.post('/create', async (req, res) => {
    try {
        const user = await User.create(req.body);
        // add a catch for the error when a user with this email already exists
        // sending back the user object only for testing purposes
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// will need to authorize that the user can update the requested account
router.put('/update', async (req, res) => {
    try {
        // verification and database update functionality here

        res.status(200).json({ msg: 'Update request received' });
    } catch (err) {
        res.status(500).json(err);
    }
});

// will need to authorize that the user can delete the requested account
router.delete('/delete', async (req, res) => {
    try {
        // verification and database update functionality here

        res.status(200).json({ msg: 'Delete request received' });
    } catch (err) {
        res.status(500).json(err);
    }
});
//#endregion


//#region -- user login and logout
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ msg: 'Incorrect email or password, please try again.' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ msg: 'Incorrect email or password, please try again.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, msg: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
//#endregion

module.exports = router;