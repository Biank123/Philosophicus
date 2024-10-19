const db = require('../Models/db'); 
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

// Obtener usuario por ID (para obtener el perfil)
const getUserById = async (userId) => {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    console.log(userId);
    console.log(result);
    return result.rows[0];
};

// Eliminar usuario por ID
const deleteUserById = async (userId) => {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
    return result.rows[0]; // Devuelve el usuario eliminado
};

// Actualizar la contraseña del usuario
const updateUserPassword = async (userId, newPassword) => {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const result = await db.query(
        'UPDATE users SET password = $1 WHERE id = $2 RETURNING *',
        [hashedPassword, userId]
    );
    return result.rows[0]; // Devuelve el usuario con la contraseña actualizada
};

const getAllUsers = async () => {
    const query = 'SELECT * FROM users';
    const { rows } = await db.query(query);
    return rows;
};

module.exports = {
    createUser,
    getUserByEmail,
    createToken,
    getUserById,
    deleteUserById,
    updateUserPassword,
    getAllUsers
};