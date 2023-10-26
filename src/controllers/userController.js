const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../constants');
const userService = require('../services/userService');

router.get('/login', (req, res) => {
    res.render('login')
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });


    const isValid = await bcrypt.compare(password, user.password);

    if (!user || !isValid) {
        res.send('<script>alert("Inavlid username or password!"); window.location.href = "/login";</script>');
    }

    try {
        const token = await userService.login(user);
        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }

    
   


});

// Routes for the register
router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password === repeatPassword) {
        const user = await User.create({
            username,
            password,
        });

        const token = await userService.login(user);
        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } else {
        res.send('<script>alert("Passwords must match!"); window.location.href = "/register";</script>');

    }



});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router;