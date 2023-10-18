const router = require('express').Router();
const User = require('../models/user');

router.get('/login', (req, res) => {
    res.render('login')
});

// Routes for the register
router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    
    if (password === repeatPassword) {
        await User.create({
            username,
            password,
        });
        res.redirect('/login')
    } else {
        res.send('<script>alert("Passwords must match!"); window.location.href = "/register";</script>');

    }



});

router.get('/logout', (req, res) => {

    res.redirect('/');
});

module.exports = router;