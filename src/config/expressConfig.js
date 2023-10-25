const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const customMiddleware = require('../customMiddleware/auth');

const expressConfig = (app) => {
    // Setup static files
    app.use(express.static(path.resolve(__dirname,  '../public')));
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(customMiddleware.auth);
};

module.exports = expressConfig;