const { pool } = require('../Models/db');

// Función para guardar un borrador
const saveDraft = async (userId, title, texto) => {
  const result = await pool.query(
    'INSERT INTO drafts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *',
    [userId, title, texto]
  );
  return result.rows[0]; // Devuelve el primer resultado
};

const publishEssay = async (title, content, userId, createdAt) => {
  // Aquí va tu lógica para insertar el ensayo en la base de datos
  const query = 'INSERT INTO essays (title, content, user_id, created_at, is_published) VALUES ($1, $2, $3, $4, true) RETURNING *';
  const values = [title, content, userId, createdAt]; 

  const { rows } = await pool.query(query, values);
  return rows[0]; // Retorna el ensayo recién creado
};

// Función para obtener ensayos publicados
const getPublishedEssays = async () => {
  const result = await pool.query('SELECT * FROM essays WHERE is_published = true');
  return result.rows;
};

const getPublishedUserEssays = async (userId) => {
  const { rows } = await pool.query(
    'SELECT * FROM essays WHERE user_id = $1 AND is_published = true',
    [userId]
  );
  return rows;
};


// Función para obtener borradores de un usuario
const getDraftsByUser = async (userId) => {
  const result = await pool.query('SELECT * FROM drafts WHERE user_id = $1', [userId]);
  return result.rows;
};

const deleteEssay = async (id) => {
  const query = 'DELETE FROM essays WHERE id = $1';
  const result = await pool.query(query, [id]); 

  return result.rowCount > 0; // Retorna true si se eliminó al menos un registro
};


const publishDraft = async (draftId) => {
  try {
      // Primero, obtenemos el borrador
      const draftResult = await pool.query('SELECT * FROM drafts WHERE id = $1', [draftId]);
      const draft = draftResult.rows[0];

      if (!draft) {
          throw new Error('Borrador no encontrado');
      }

      // Insertar el borrador en la tabla de ensayos
      const insertResult = await pool.query(
          'INSERT INTO essays (title, user_id, content, is_published) VALUES ($1, $2, $3, true) RETURNING *',
          [draft.title, draft.user_id, draft.content]
      );

      const newEssay = insertResult.rows[0];

      // Eliminar el borrador
      await pool.query('DELETE FROM drafts WHERE id = $1', [draftId]);

      return newEssay; // Retorna el ensayo publicado
  } catch (error) {
      console.error('Error al publicar el ensayo:', error);
      throw error; // Lanza el error para manejarlo en el controlador
  }
};

const deleteDraft = async (draftId) => {
  try {
      // Eliminar el borrador de la tabla drafts
      const result = await pool.query('DELETE FROM drafts WHERE id = $1 RETURNING *', [draftId]);
      
      // Retorna verdadero si se eliminó un borrador
      return result.rowCount > 0; 
  } catch (error) {
      console.error('Error al eliminar el borrador:', error);
      throw error; // Lanza el error para manejarlo en el controlador
  }
};

// Función para editar un borrador
const editDraft = async (id, title, content) => {
  // Verificar si el borrador existe
  const draftResult = await pool.query('SELECT * FROM drafts WHERE id = $1', [id]);
  
  if (draftResult.rows.length === 0) {
      throw new Error('Borrador no encontrado');
  }

  // Actualizar el borrador en la base de datos
  const updateResult = await pool.query(
      'UPDATE drafts SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
      [title, content, id]
  );

  return updateResult.rows[0]; // Retornar el borrador actualizado
};


module.exports = { deleteEssay, editDraft, publishDraft, deleteDraft, saveDraft, publishEssay, getPublishedEssays, getDraftsByUser, getPublishedUserEssays };