const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registro de nuevo usuario
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Crear usuario
        const newUser = await userModel.createUser(username, email, password);

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
        const user = await userModel.getUserByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = userModel.createToken(user);
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Obtener perfil del usuario
const getUserProfile = async (req, res) => {
    const userId = req.user.id; // Extraído del token JWT

    try {
        const user = await userModel.getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ username: user.username, email: user.email });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Eliminar cuenta del usuario
const deleteUserAccount = async (req, res) => {
    const userId = req.user.id; // Extraído del token JWT

    try {
        const deletedUser = await userModel.deleteUserById(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'Account deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Cambiar la contraseña del usuario
const changeUserPassword = async (req, res) => {
    const userId = req.user.id; // Extraído del token JWT
    const { currentPassword, newPassword } = req.body;

    try {
        const user = await userModel.getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Verificar la contraseña actual
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Current password is incorrect' });
        }

        // Actualizar la contraseña
        await userModel.updateUserPassword(userId, newPassword);
        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    deleteUserAccount,
    changeUserPassword
};