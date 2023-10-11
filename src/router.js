const express = require('express')
const router = express.Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');

router.use(express.urlencoded({extended: false}))
router.use(homeController);
router.use(cubeController);
router.use(accessoryController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;
