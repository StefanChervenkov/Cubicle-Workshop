const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {

    res.render('index');
});
    


router.get('/about', (req, res) => {
    res.render('about');
});

// router.get('*', (req, res) => {
//     res.render('404');
// });

module.exports = router;