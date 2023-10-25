const jwt = require('../lib/jwt');
const { SECRET } = require('../constants');


exports.login = async (user) => {
    const payload = {
        username: user.username,
        usertId: user._id,
    }

    const token = await jwt.sign(payload, SECRET, { expiresIn: '1h' });
    return token;
    
}