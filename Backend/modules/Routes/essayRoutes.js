const express = require('express');
const router = express.Router();
const { saveDraftController, publishEssayController, fetchPublishedEssays, fetchDraftsByUser } = require('../Controllers/essayController');
const authenticateToken = require('../Middlewares/authMiddleware');

// Ruta para guardar borradores
router.post('/save-draft', saveDraftController);

// Ruta para publicar el ensayo
router.post('/publish', publishEssayController);

// Ruta para mostrar ensayos publicados
router.get('/published', authenticateToken, fetchPublishedEssays);

// Ruta para mostrar los borradores guardados
router.get('/drafts', authenticateToken, fetchDraftsByUser);

module.exports = router;
