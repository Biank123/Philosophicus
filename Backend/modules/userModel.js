const db = require('./db'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
// Crear nuevo usuario
const createUser = async (username, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, hashedPassword]
    );

    return result.rows[0];
};

// Obtener usuario por email
const getUserByEmail = async (email) => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
};

// Crear token
const createToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};


module.exports = {
    createUser,
    getUserByEmail,
    createToken,
};