const mongoose = require('mongoose');
const Cube = require('./cube');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: imageUrlValidator,
    },
    description: {
        type: String,
        required: true,
    },
    cubes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cube'
    }]

})