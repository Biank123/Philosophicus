const messagesModel = require('../Models/messagesModel');

// Controlador para enviar un mensaje
const sendMessage = async (req, res) => {
    const { receiver_id, content } = req.body;
    const sender_id = req.user.id;  // ID del usuario autenticado

    try {
        const newMessage = await messagesModel.sendMessage(sender_id, receiver_id, content);
        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error al enviar mensaje:', error);
        res.status(500).json({ error: 'No se pudo enviar el mensaje' });
    }
};

// Controlador para obtener mensajes entre dos usuarios
const getMessagesBetweenUsers = async (req, res) => {
    const userId = req.params.userId;
    const currentUserId = req.user.id;

    try {
        const messages = await messagesModel.getMessagesBetweenUsers(currentUserId, userId);
        console.log('Mensajes obtenidos desde el modelo:', messages);
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error al obtener mensajes:', error);
        res.status(500).json({ error: 'No se pudieron obtener los mensajes' });
    }
};

// Controlador para eliminar un mensaje
const deleteMessageController = async (req, res) => {
    if (!req.user || !req.user.id) {
        return res.status(401).json({ error: 'Usuario no autenticado' });
    }

    const { messageId } = req.params;
    const userId = req.user.id;

    try {
        const deletedMessage = await messagesModel.deleteMessage(messageId, userId);

        if (deletedMessage) {
            res.status(200).json({ message: 'Mensaje eliminado exitosamente', deletedMessage });
        } else {
            const messageExists = await messagesModel.getMessageById(messageId);
            if (!messageExists) {
                res.status(404).json({ error: 'El mensaje no existe' });
            } else {
                res.status(403).json({ error: 'No tienes permiso para eliminar este mensaje' });
            }
        }
    } catch (error) {
        console.error('Error al eliminar mensaje:', error);
        res.status(500).json({ error: 'No se pudo eliminar el mensaje' });
    }
};

module.exports = {
    sendMessage,
    getMessagesBetweenUsers,
    deleteMessageController
};
