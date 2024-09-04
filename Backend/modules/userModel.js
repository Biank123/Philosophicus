const db = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Crear nuevo usuario
const createUser = async (username, email, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.query(
        'INSERT INTO users (username, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING *',
        [username, email, hashedPassword, role]
    );
    return result.rows[0];
};

// Obtener usuario por email
const getUserByEmail = async (email) => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
};

// Crear token JWT
const createToken = (user) => {
    return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = {
    createUser,
    getUserByEmail,
    createToken,
};