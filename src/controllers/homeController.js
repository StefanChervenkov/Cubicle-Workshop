const router = require('express').Router();
const Cube = require('../models/cube');
const path = require('path');

router.get('/', async (req, res) => {
    const allCubes = await Cube.find().lean();
    
    res.render('index', {allCubes});
});
    


router.get('/about', (req, res) => {
   
    res.render('about');
});

// router.get('*', (req, res) => {
//     res.render('404');
// });

module.exports = router;