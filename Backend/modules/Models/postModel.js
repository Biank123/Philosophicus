// modules/postsModel.js
const pool = require('../db'); 

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

const getCommentsByPostId = async (postId) => {
    const query = `
      SELECT * FROM comments
      WHERE post_id = $1
      ORDER BY created_at DESC
    `;
    const { rows } = await db.query(query, [postId]);
    return rows;
  };
  


module.exports = {
    createPost,
    getAllPosts,
    getPostByIdC,
    getCommentsByPostId
};
