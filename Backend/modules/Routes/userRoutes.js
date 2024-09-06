const express = require('express');
const router = express.Router();
const upload = require('../Middlewares/uploadMiddleware');
const { registerUser, loginUser, getUserProfile, deleteUserAccount, changeUserPassword } = require('../Controllers/userController');
const authenticate = require('../Middlewares/authMiddleware');

// Ruta de registro de usuario
router.post('/register', registerUser); //Funciona
// Ruta de login de usuario
router.post('/login', loginUser); //Funciona

// Obtener información del perfil del usuario autenticado
router.get('/profile', authenticate, getUserProfile);

// Eliminar la cuenta del usuario autenticado
router.delete('/profile', authenticate, deleteUserAccount);

// Cambiar la contraseña del usuario autenticado
router.put('/profile/change-password', authenticate, changeUserPassword);


// Ruta para subir un archivo
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
