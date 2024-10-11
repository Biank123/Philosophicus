const express = require('express');
const router = express.Router();
const problemController = require('../Controllers/PhiController');
// const authenticate = require('../Middlewares/authMiddleware');

// Ruta para obtener todos los problemas
router.get('/', problemController.getProblems);

// Ruta para obtener un problema por ID
router.get('/:id', problemController.getProblemById);

module.exports = router;
