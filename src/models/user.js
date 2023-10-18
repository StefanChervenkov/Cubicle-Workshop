const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    username: {type: String, unique: true, required: true },
=======
    username: {type: String, unique: true, required: true},
>>>>>>> 2ac83d81fb4faee44afbf35d68feda1f49c72c2d
    password: String,
});

userSchema.pre('save', async function () {
    const hasch = await bcrypt.hash(this.password, 10);
    this.password = hasch;
})

const User = mongoose.model('User', userSchema);

module.exports = User;