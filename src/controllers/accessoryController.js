const router = require('express').Router();
const Accessory = require('../models/accessory');

router.get('/create/accessory', (req, res) => {
    res.render('createAccessory')
});


router.post('/create/accessory', async (req, res) => {
    const { name, description, imageUrl } = req.body;

    await Accessory.create({
        name,
        imageUrl,
        description,
    })

    res.redirect('/create/accessory');
});










module.exports = router;