const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/login', (req, res) => {
    res.render('login')
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    const isValid = await bcrypt.compare(password, user.password);

    if (!user || !isValid) {
        res.send('<script>alert("Inavlid username or password!"); window.location.href = "/login";</script>');
    } else  {
        console.log(user);
        res.redirect('/')
    } 



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