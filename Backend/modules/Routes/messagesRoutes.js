const express = require('express');
const router = express.Router();
const messagesController = require('../Controllers/messagesController');
const authenticate = require('../Middlewares/authMiddleware');  // Middleware de autenticación

// Ruta para enviar un mensaje
router.post('/', authenticate, messagesController.sendMessage);

// Ruta para obtener mensajes entre el usuario autenticado y otro usuario
router.get('/:userId', authenticate, messagesController.getMessagesBetweenUsers);

// Nueva ruta para eliminar un mensaje por su ID
router.delete('/:messageId', authenticate, messagesController.deleteMessageController);

module.exports = router;
