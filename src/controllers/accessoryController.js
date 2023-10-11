const router = require('express').Router();
const Accessory = require('../models/accessory');
const Cube = require('../models/cube');

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

router.get('/attach/accessory/:id', async (req, res) => {
    const cube = await Cube.findById(req.params.id).lean();
    const allAccessories = await Accessory.find().lean();
    const unattachedAccessories = allAccessories.filter(accessory => !cube.accessories.includes(accessory._id.toString()) )
    

    res.render('attachAccessory', {cube, unattachedAccessories} )
})










module.exports = router;