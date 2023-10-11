const mongoose = require('mongoose');
const Cube = require('./cube');

const imageUrlValidator = [validator, 'Image URL must start with http:// or https://'];

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

});

function validator(value) {
    return /^https?:\/\/.+\..+/.test(value);
};

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;