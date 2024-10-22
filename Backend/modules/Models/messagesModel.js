const db = require('./db'); 

// Función para enviar un mensaje
const sendMessage = async (sender_id, receiver_id, content) => {
    const query = `
        INSERT INTO messages (sender_id, receiver_id, content) 
        VALUES ($1, $2, $3) RETURNING *;
    `;
    const values = [sender_id, receiver_id, content];
    const result = await db.query(query, values);
    return result.rows[0];
};

// Función para obtener todos los mensajes entre dos usuarios
const getMessagesBetweenUsers = async (user1, user2) => {
    const query = `
        SELECT * FROM messages
        WHERE (sender_id = $1 AND receiver_id = $2) 
        OR (sender_id = $2 AND receiver_id = $1)
        ORDER BY sent_at ASC;
    `;
    const values = [user1, user2];
    const result = await db.query(query, values);
    console.log('Resultados de la consulta a la base de datos:', result);
    return result.rows;
}; 

// Función para eliminar un mensaje por su ID y por usuario (para asegurar que solo el remitente o receptor lo pueda eliminar)
const deleteMessage = async (messageId, userId) => {
    const query = `
        DELETE FROM messages 
        WHERE id = $1 AND (sender_id = $2 OR receiver_id = $2) 
        RETURNING *;
    `;
    const values = [messageId, userId];
    const result = await db.query(query, values);
    return result.rowCount > 0 ? result.rows[0] : null;  // Si hay filas eliminadas, retorna el mensaje eliminado
};

const getMessageById = async (messageId) => {
    const query = `SELECT * FROM messages WHERE id = $1`;
    const values = [messageId];
    const result = await db.query(query, values);
    return result.rows[0]; // Retorna el mensaje si existe
};

module.exports = {
    sendMessage,
    getMessagesBetweenUsers,
    deleteMessage,
    getMessageById
};
