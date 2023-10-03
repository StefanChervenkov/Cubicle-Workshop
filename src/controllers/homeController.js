const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', 'config', 'database.json'), 'utf-8', (err, data)=> {
        const cubesArr = JSON.parse(data);
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