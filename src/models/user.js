const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

userSchema.pre('save', async function () {
    const hasch = await bcrypt.hash(this.password, 10);
    this.password = hasch;
})

const User = mongoose.model('User', userSchema);

module.exports = User;