const postModel = require('../Models/postModel');

// Crear una nueva publicación
const createPostController = async (req, res) => {
    const { title, content, category } = req.body;
    const file = req.file ? req.file.filename : null;

    try {
        const newPost = await postModel.createPost(title, content, category, file);
        res.status(201).json(newPost);
    } catch (err) {
        console.error('Error al crear la publicación:', err);
        res.status(500).json({ error: 'Error al crear la publicación' });
    }
};

// Obtener todas las publicaciones
const getAllPostsController = async (req, res) => {
    try {
        const posts = await postModel.getAllPosts();
        res.json(posts);
    } catch (err) {
        console.error('Error al obtener publicaciones:', err);
        res.status(500).json({ error: 'Error al obtener publicaciones' });
    }
};

// Obtener una publicación por ID
const getPostByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await postModel.getPostById(id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Publicación no encontrada' });
        }
    } catch (err) {
        console.error('Error al obtener la publicación:', err);
        res.status(500).json({ error: 'Error al obtener la publicación' });
    }
};

const getCommentsByPostIdController = async (req, res) => {
    const { postId } = req.params;
  
    try {
      const comments = await postModel.getCommentsByPostId(postId);
      res.json({ comments });
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
      res.status(500).json({ error: 'Error al obtener comentarios' });
    }
  };

module.exports = {
    createPostController,
    getAllPostsController,
    getPostByIdController,
    getCommentsByPostIdController
};