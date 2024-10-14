const express = require('express');
const router = express.Router();
const { saveDraftController, fetchPublishedEssaysByUser, publishEssayController, fetchPublishedEssays, fetchDraftsByUser } = require('../Controllers/essayController');
const authenticateToken = require('../Middlewares/authMiddleware');
const TextReview = require('../Controllers/TextReview');

// Ruta para guardar borradores
router.post('/save-draft', authenticateToken, saveDraftController); //Funciona

// Ruta para publicar el ensayo
router.post('/publish', authenticateToken, publishEssayController); //Funciona

// Ruta para mostrar ensayos publicados
router.get('/published', authenticateToken, fetchPublishedEssays); //Funciona

router.get('/published/:userId', authenticateToken, fetchPublishedEssaysByUser);

// Ruta para mostrar los borradores guardados
router.get('/drafts', authenticateToken, fetchDraftsByUser); //Funciona

router.post('/revisar', authenticateToken, TextReview)

module.exports = router;
