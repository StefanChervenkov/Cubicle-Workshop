const mongoose = require('mongoose');
const Accessory = require('./accessory')
const imageUrlValidator = [validator, 'Image URL must start with http:// or https://'];


const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: imageUrlValidator,
    },

    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    accessories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accessory'
    }],
});

function validator(value) {
    return /^https?:\/\/.+\..+/.test(value);
};

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;