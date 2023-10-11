const router = require('express').Router();
const path = require('path');
const Cube = require('../models/cube');



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

    console.log(cube);
    res.render('details', cube)
  


});



module.exports = router;