const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'No tiene los requisistos necesarios' });
  }
  jwt.verify(token, 'emavrasecretkey', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token no válido' });
    }
    req.id_user = decoded.id_user;
    req.email = decoded.email;
    next();
  });
};

module.exports = verifyToken;