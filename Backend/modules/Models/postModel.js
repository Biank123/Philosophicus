// modules/postsModel.js
const pool = require('../Models/db'); 

// Crear una nueva publicación
const createPost = async (title, content, category, file) => {
    const query = `
        INSERT INTO posts (title, content, category, file)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    const values = [title, content, category, file];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// Obtener todas las publicaciones
const getAllPosts = async () => {
    const query = 'SELECT * FROM posts;';
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

// Obtener comentarios por ID de publicación
const getCommentsByPostId = async (id) => { 
    const query = `
      SELECT * FROM comments
      WHERE post_id = $1
      ORDER BY created_at DESC
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
  
  const addComment = async (postId, content) => {
    // Inserta el nuevo comentario en la base de datos
    const result = await pool.query(
        'INSERT INTO comments (post_id, content) VALUES ($1, $2) RETURNING *',
        [postId, content]
    );
    return result.rows[0]; // Devuelve el comentario agregado
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById, 
    getCommentsByPostId,
    deleteComment,
    deletePost,
    addComment
};