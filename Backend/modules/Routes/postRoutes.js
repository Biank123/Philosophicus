// modules/postRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const {createPostController, getAllPostsController, getPostByIdController, getCommentsByPostIdController } = require('../Controllers/postController');

const router = express.Router();

// Configuración de Multer
const upload = multer({ dest: 'uploads/' });

// Ruta para crear una nueva publicación
router.post('/', upload.single('file'), createPostController);

// Ruta para obtener todas las publicaciones
router.get('/', getAllPostsController);

// Ruta para obtener una publicación por ID
router.get('/:id', getPostByIdController);


// Ruta para obtener comentarios de una publicación específica
router.get('/:postId/comments', getCommentsByPostIdController);

module.exports = router;