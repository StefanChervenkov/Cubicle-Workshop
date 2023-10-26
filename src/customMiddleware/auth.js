const jwt = require('../lib/jwt');
const { SECRET } = require('../constants');

exports.auth = async (req, res, next) => {
    const token = req.cookies.auth;
  
    if (token) {
      try {
        const decoded = await jwt.verify(token, SECRET);
  
        req.user = decoded;
        res.locals.user = decoded;
        res.locals.isAuthenticated = true;
      } catch (err) {
       console.log(err);
      }
    }
  
    next();
  };
  