const { pool } = require('../Models/db');

// Función para guardar un borrador
const saveDraft = async (userId, title, texto) => {
  const result = await pool.query(
    'INSERT INTO drafts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *',
    [userId, title, texto]
  );
  return result.rows[0]; // Devuelve el primer resultado
};

// const publishEssay = async (title, content, userId) => {
//   const result = await pool.query(
//     'INSERT INTO essays (title, content, user_id, is_published) VALUES ($1, $2, $3, true) RETURNING *',
//     [title, content, userId]
//   );
//   return result.rows[0]; // Devuelve el ensayo publicado
// };

const publishEssay = async (title, content, userId, createdAt) => {
  // Aquí va tu lógica para insertar el ensayo en la base de datos
  const query = 'INSERT INTO essays (title, content, user_id, created_at) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [title, content, userId, createdAt]; // Asegúrate de incluir createdAt en los valores

  const { rows } = await db.query(query, values);
  return rows[0]; // Retorna el ensayo recién creado
};

// Función para obtener ensayos publicados
const getPublishedEssays = async () => {
  const result = await pool.query('SELECT * FROM essays WHERE is_published = true');
  return result.rows;
};

const getPublishedUserEssays = async (userId) => {
  const { rows } = await pool.query(
      'SELECT id, title, content, created_at FROM essays WHERE user_id = $1 AND is_published = true',
      [userId]
  );
  return rows; // Devuelve solo el arreglo de ensayos
};

// Función para obtener borradores de un usuario
const getDraftsByUser = async (userId) => {
  const result = await pool.query('SELECT * FROM drafts WHERE user_id = $1', [userId]);
  return result.rows;
};

module.exports = { saveDraft, publishEssay, getPublishedEssays, getDraftsByUser, getPublishedUserEssays };