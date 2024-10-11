const express = require('express');
const router = express.Router();
const { 
    getTemas, 
    getAutores, 
    getEpocas, 
    getProblemasPorTema, 
    getDescripcionAutor, 
    getTemasPorEpoca, 
    getAutoresPorEpoca 
} = require('../Controllers/contentController');

// Ruta para obtener todos los temas
router.get('/temas', getTemas);

// Ruta para obtener todos los autores
router.get('/autores', getAutores);

// Ruta para obtener todas las épocas
router.get('/epocas', getEpocas);

// Ruta para obtener los problemas asociados a un tema
router.get('/temas/:temaId/problemas', getProblemasPorTema);

// Ruta para obtener la descripción de un autor
router.get('/autores/:autorId/descripcion', getDescripcionAutor);

// Ruta para obtener los temas relacionados a una época
router.get('/epocas/:epocaId/temas', getTemasPorEpoca);

// Ruta para obtener los autores relacionados a una época
router.get('/epocas/:epocaId/autores', getAutoresPorEpoca);

module.exports = router;
