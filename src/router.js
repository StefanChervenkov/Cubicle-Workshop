const express = require('express')
const router = express.Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

router.use(express.urlencoded({extended: false}))
router.use(homeController);
router.use(cubeController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;
