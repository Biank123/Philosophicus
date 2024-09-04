const db = require('./db'); // Asegúrate de que esta línea sea correcta

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

// Crear token (suponiendo que ya tienes una función para esto)
const createToken = (user) => {
    // Implementa tu lógica para crear un token JWT aquí
};

module.exports = {
    createUser,
    getUserByEmail,
    createToken,
};