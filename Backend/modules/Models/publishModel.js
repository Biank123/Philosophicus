const { Pool } = require('pg');
const pool = new Pool(); // Configura la conexión con tu base de datos

// Función para guardar un borrador
const saveDraft = async (userId, title, texto) => {
  const result = await pool.query(
    'INSERT INTO drafts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *',
    [userId, title, texto]
  );
  return result.rows[0];
};

// Función para publicar un ensayo
const publishEssay = async (title, content) => {
  const result = await pool.query(
    'INSERT INTO essays (title, content, is_published) VALUES ($1, $2, TRUE) RETURNING *',
    [title, content]
  );
  return result.rows[0];
};

// Función para obtener ensayos publicados
const getPublishedEssays = async () => {
  const result = await pool.query('SELECT * FROM essays WHERE published = true');
  return result.rows;
};

// Función para obtener borradores de un usuario
const getDraftsByUser = async (userId) => {
  const result = await pool.query('SELECT * FROM drafts WHERE user_id = $1', [userId]);
  return result.rows;
};

module.exports = { saveDraft, publishEssay, getPublishedEssays, getDraftsByUser };