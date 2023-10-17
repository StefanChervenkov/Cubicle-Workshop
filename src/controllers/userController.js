const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login')
});

// Routes for the register
router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/login')
});

router.get('/logout', (req, res) => {
    
    res.redirect('/');
});

module.exports = router;