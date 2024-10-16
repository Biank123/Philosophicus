// modules/postsModel.js
const pool = require('../Models/db'); 

// Crear una nueva publicación
const createPost = async (title, content, category, file, userId) => { // Agrega userId como argumento
  const query = `
      INSERT INTO posts (title, content, category, file, user_id) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *;
  `;
  const values = [title, content, category, file, userId]; // Agrega userId a values
  const result = await pool.query(query, values);
  return result.rows[0];
};


const getAllPosts = async () => {
  const query = `
    SELECT p.*, u.username, p.created_at 
    FROM posts p
    JOIN users u ON p.user_id = u.id
    ORDER BY p.created_at DESC;
  `;
  const result = await pool.query(query);
  return result.rows;
};

// Obtener una publicación por ID
const getPostById = async (id) => {
    const query = 'SELECT * FROM posts WHERE id = $1;';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
};


const getCommentsByPostId = async (id) => {
  const query = `
    SELECT c.*, u.username, c.created_at 
    FROM comments c
    JOIN users u ON c.user_id = u.id
    WHERE c.post_id = $1
    ORDER BY c.created_at ASC;
  `;
  const { rows } = await pool.query(query, [id]);
  return rows;
};

// Función para eliminar un comentario
const deleteComment = async (commentId) => {
    const query = 'DELETE FROM comments WHERE id = $1 RETURNING *;';
    const values = [commentId];
    
    try {
      const result = await pool.query(query, values);
      return result.rowCount > 0; // Devuelve true si se eliminó un comentario
    } catch (error) {
      console.error('Error al eliminar comentario:', error);
      throw error; // Lanza el error para manejarlo en el controlador
    }
  };

  // Función para eliminar una publicación
const deletePost = async (id) => {
    const query = 'DELETE FROM posts WHERE id = $1 RETURNING *;';
    const values = [id];
    
    try {
      const result = await pool.query(query, values);
      return result.rowCount > 0; // Devuelve true si se eliminó la publicación
    } catch (error) {
      console.error('Error al eliminar publicación:', error);
      throw error; // Lanza el error para manejarlo en el controlador
    }
  };
  
  const addComment = async (postId, content, userId) => {
    // Inserta el nuevo comentario en la base de datos
    const result = await pool.query(
        'INSERT INTO comments (post_id, content, user_id) VALUES ($1, $2, $3) RETURNING *',
        [postId, content, userId]
    );
    return result.rows[0]; // Devuelve el comentario agregado
};

// Función para obtener publicaciones por ID de usuario
const getPostsByUserId = async (userId) => {
  const query = `
    SELECT * FROM posts WHERE user_id = $1
    ORDER BY created_at DESC;
  `;
  const values = [userId];
  const res = await pool.query(query, values);
  return res.rows;
};

// Función para obtener comentarios por ID de usuario
const getCommentsByUserId = async (userId) => {
  if (!userId) {
      throw new Error('El ID de usuario es requerido');
  }

  const query = 'SELECT * FROM comments WHERE user_id = $1';
  const values = [userId];

  try {
      const result = await pool.query(query, values);
      return result.rows; // Devuelve los comentarios
  } catch (error) {
      console.error('Error al obtener los comentarios:', error);
      throw new Error('Error al acceder a la base de datos'); // Lanza un error para manejarlo en el controlador
  }
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById, 
    getCommentsByPostId,
    deleteComment,
    deletePost,
    addComment,
    getPostsByUserId,
    getCommentsByUserId
};