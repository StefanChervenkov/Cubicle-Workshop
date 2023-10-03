const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', 'config', 'database.json'), 'utf-8', (err, data)=> {
        let cubesArr = JSON.parse(data);
        
        if (req.query.search) {
            const searchValue = req.query.search.toLowerCase()
            cubesArr = cubesArr.filter(cube => cube.name.toLowerCase().includes(searchValue));
            
        } 

        if (req.query.from) {
            const searchValue = Number(req.query.from);
            cubesArr = cubesArr.filter(cube => Number(cube.difficultyLevel) >= searchValue);
        };
        if (req.query.to) {
            const searchValue = Number(req.query.to);
            cubesArr = cubesArr.filter(cube => Number(cube.difficultyLevel) <= searchValue);
        };


        res.render('index', {cubesArr});
    });
    
});

router.get('/about', (req, res) => {
    res.render('about');
});

// router.get('*', (req, res) => {
//     res.render('404');
// });

module.exports = router;