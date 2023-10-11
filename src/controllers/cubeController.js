const router = require('express').Router();
const path = require('path');
const Cube = require('../models/cube');
const Accessory = require('../models/accessory');



router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;
    await Cube.create({
        name,
        description,
        imageUrl,
        difficultyLevel,
    });

    res.redirect('/create')
});

router.get('/details/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await Cube.findById(cubeId).lean();
    const hasAccessories = cube.accessories.length > 0;
    const accessories = await Accessory.find().where('_id').in(cube.accessories).lean();
   
    
    
    res.render('details', {cube, hasAccessories, accessories})
  


});



module.exports = router;