const express = require('express');
const router = express.Router();
const { saveDraftController, deleteEssayController, fetchPublishedEssaysByUser, publishEssayController, fetchPublishedEssays, fetchDraftsByUser } = require('../Controllers/essayController');
const authenticateToken = require('../Middlewares/authMiddleware');
const TextReview = require('../Controllers/TextReview');

// Ruta para guardar borradores
router.post('/save-draft', authenticateToken, saveDraftController); //Funciona

// Ruta para publicar el ensayo
router.post('/publish', authenticateToken, publishEssayController); //Funciona

// Ruta para mostrar ensayos publicados
router.get('/published', authenticateToken, fetchPublishedEssays); //Funciona

router.get('/published/user', authenticateToken, fetchPublishedEssaysByUser);

// Ruta para mostrar los borradores guardados
router.get('/drafts', authenticateToken, fetchDraftsByUser); //Funciona

//Ruta para la revisión de la IA
router.post('/revisar', authenticateToken, TextReview) //Funciona

// Ruta para eliminar un ensayo
router.delete('/delete/:id', authenticateToken, deleteEssayController);

module.exports = router;
