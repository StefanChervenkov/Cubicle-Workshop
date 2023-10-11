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

router.get('/details/*', (req, res) => {
    const id = req.url
        .split('/')
        .pop();

    fs.readFile(path.resolve(__dirname, '..', 'config', 'database.json'), 'utf-8', (err, data) => {
        const cubesArr = JSON.parse(data);
        const filteredCube = cubesArr.filter(cube => cube.id === id)[0];
        res.render('details', filteredCube);
    });



})

module.exports = router;