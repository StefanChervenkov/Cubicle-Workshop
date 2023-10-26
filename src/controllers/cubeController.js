const router = require('express').Router();

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
    const isAuthenticated = res.locals.isAuthenticated;

    const cubeId = req.params.cubeId;
    const cube = await Cube.findById(cubeId).lean();
    const hasAccessories = cube.accessories.length > 0;
    const accessories = await Accessory.find().where('_id').in(cube.accessories).lean();



    res.render('details', { cube, hasAccessories, accessories, isAuthenticated })



});

router.get('/cube/edit/:cubeId', async (req, res) => {

    const cubeId = req.params.cubeId;
    const cube = await Cube.findById(cubeId).lean();

    const selectedOptions = {
        veryEasy: cube.difficultyLevel == 1,
        easy: cube.difficultyLevel == 2,
        medium: cube.difficultyLevel == 3,
        intermediate: cube.difficultyLevel == 4,
        expert: cube.difficultyLevel == 5,
        hardcore: cube.difficultyLevel == 6,

    }



    res.render('editCube', { cube, selectedOptions });


});
router.post('/cube/edit/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    
    const editedCube = await Cube.findByIdAndUpdate(cubeId, req.body)
    

    res.redirect('/');


});

router.get('/cube/delete/:cubeId', async (req, res) => {
    const isAuthenticated = res.locals.isAuthenticated;

    res.render('delete');


});





module.exports = router;