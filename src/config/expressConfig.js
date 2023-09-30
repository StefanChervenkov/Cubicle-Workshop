const express = require('express');
const path = require('path');

const expressConfig = (app) => {


    // Setup static files
    app.use(express.static(path.resolve(__dirname,  '../public')));
};

module.exports = expressConfig;