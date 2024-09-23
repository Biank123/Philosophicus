const express = require('express');
const router = express.Router();
const { saveDraftController, publishEssayController, fetchPublishedEssays, fetchDraftsByUser } = require('../Controllers/essayController');
const authenticateToken = require('../Middlewares/authMiddleware');

// Ruta para guardar borradores
router.post('/save-draft', authenticateToken, saveDraftController); //Funciona

// Ruta para publicar el ensayo
router.post('/publish', authenticateToken, publishEssayController); //Funciona

// Ruta para mostrar ensayos publicados
router.get('/published', authenticateToken, fetchPublishedEssays); //Funciona

// Ruta para mostrar los borradores guardados
router.get('/drafts', authenticateToken, fetchDraftsByUser); //Funciona

module.exports = router;
