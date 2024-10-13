// modules/postRoutes.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const {createPostController, deletePostController, addCommentController, deleteCommentController, getAllPostsController, getPostByIdController, getCommentsByPostIdController } = require('../Controllers/postController');

const router = express.Router();

// Configuración de Multer
const upload = multer({ dest: 'uploads/' });

// Ruta para crear una nueva publicación
router.post('/', upload.single('file'), createPostController);

// Ruta para obtener todas las publicaciones
router.get('/', getAllPostsController);

// Ruta para obtener una publicación por ID
router.get('/:id', getPostByIdController);

router.delete('/:id', deletePostController);

// Ruta para obtener comentarios de una publicación específica
router.get('/:id/comments', getCommentsByPostIdController);

router.delete('/:id/comments/:commentId', deleteCommentController);

router.post('/:id/comments', addCommentController);

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
  });


module.exports = router;