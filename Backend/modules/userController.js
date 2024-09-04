const userModel = require('./userModel');
const bcrypt = require('bcrypt');

// Registro de nuevo usuario
const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        // Validar rol
        if (!['student', 'teacher'].includes(role)) {
            return res.status(400).json({ error: 'Invalid role' });
        }

        // Crear usuario
        const newUser = await userModel.createUser(username, email, password, role);

        // Crear token
        const token = userModel.createToken(newUser);

        res.status(201).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Login de usuario
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Obtener usuario por email
        const user = await userModel.getUserByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password_hash))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Crear token
        const token = userModel.createToken(user);

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    registerUser,
    loginUser,
};
