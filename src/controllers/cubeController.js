const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    // to do...
});

module.exports = router;