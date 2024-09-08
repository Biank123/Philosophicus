const express = require('express');
const router = express.Router();
const problemController = require('../Controllers/PhiController');

// Ruta para obtener todos los problemas
router.get('/', problemController.getProblems);

module.exports = router;
