// modules/postRoutes.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const {createPostController, getPostsByUserIdController, getCommentsByUserIdController, deletePostController, addCommentController, deleteCommentController, getAllPostsController, getPostByIdController, getCommentsByPostIdController } = require('../Controllers/postController');
const authenticate = require('../Middlewares/authMiddleware');

const router = express.Router();

// Configuración de Multer
const upload = multer({ dest: 'uploads/' });

// Ruta para crear una nueva publicación
router.post('/', upload.single('file'), authenticate, createPostController);

// Ruta para obtener todas las publicaciones
router.get('/', authenticate, getAllPostsController);

// Ruta para obtener una publicación por ID
router.get('/:id', authenticate, getPostByIdController);

router.delete('/:id', authenticate, deletePostController);

// Ruta para obtener comentarios de una publicación específica
router.get('/:id/comments', authenticate, getCommentsByPostIdController);

router.delete('/:id/comments/:commentId', authenticate, deleteCommentController);

router.post('/:id/comments', authenticate, addCommentController);

// Ruta para descargar archivos
router.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);
    
    // Verificar si el archivo existe
    fs.stat(filePath, (err) => {
      if (err) {
        console.error('Archivo no encontrado:', err);
        return res.status(404).send('Archivo no encontrado.');
      }
      
      // Si el archivo existe, proceder a descargarlo
      res.download(filePath, (err) => {
        if (err) {
          console.error('Error al descargar el archivo:', err);
          res.status(500).send('Error al descargar el archivo.');
        }
      });
    });
  }, authenticate);

 // Ruta para obtener publicaciones de un usuario específico
router.get('/user/posts', authenticate, getPostsByUserIdController);

router.get('/user/comments', authenticate, getCommentsByUserIdController);

module.exports = router;