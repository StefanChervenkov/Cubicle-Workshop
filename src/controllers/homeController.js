const router = require('express').Router();
const Cube = require('../models/cube');


router.get('/', async (req, res) => {
    let allCubes = await Cube.find().lean();
    const searchValue = req.query.search;


    if(searchValue) {
        allCubes = allCubes.filter(cube => cube.name.toLowerCase().includes(searchValue.toLowerCase()));
    };

    if (req.query.from) {
        allCubes = allCubes.filter(cube => cube.difficultyLevel >= req.query.from )
    };

    if (req.query.to) {
        allCubes = allCubes.filter(cube => cube.difficultyLevel <= req.query.to )
    };

    const isAuthenticated = res.locals.isAuthenticated
   
    res.render('index', {allCubes, isAuthenticated});
});
    


router.get('/about', (req, res) => {
   
    res.render('about');
});



module.exports = router;