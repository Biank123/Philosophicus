const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Formato: Bearer <token>

  if (token == null) return res.sendStatus(401); // Si no hay token, responder con 401

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Si el token no es válido, responder con 403
    req.user = user;
    next(); // Token válido, continuar con la solicitud
  });
};

module.exports = authenticateToken;