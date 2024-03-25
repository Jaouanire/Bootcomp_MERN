// const passport = require('passport')
const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;


  if (auth) {
      const token = auth.split(' ')[1];
      jwt.verify(token, process.env.SECRET_TOKEN, (err, data) => {
          if (err) {
              res.status(403).json({ message: 'Failed to authenticate token' });
          }
          req.user = data;
          next();
      });
  } else res.status(401).send('Token is required!');
};

module.exports =  verifyToken ;