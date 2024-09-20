const { saveDraft, publishEssay, getPublishedEssays, getDraftsByUser } = require('../Models/publishModel');

// Controlador para guardar borradores
const saveDraftController = async (req, res) => {
  const userId = req.user?.id; // Usar encadenamiento opcional para evitar errores
  if (!userId) {
    return res.status(401).json({ error: 'Usuario no autenticado' });
  }

  const { title, texto } = req.body;

  try {
    const result = await saveDraft(userId, title, texto);
    res.status(200).json({ message: 'Borrador guardado con éxito.', data: result });
  } catch (error) {
    console.error('Error al guardar el borrador:', error);
    res.status(500).json({ error: 'Error al guardar el borrador.', details: error.message });
  }
};

// Controlador para publicar el ensayo
const publishEssayController = async (req, res) => {
  try {
    const { texto } = req.body;
    const result = await publishEssay(texto);
    res.status(200).json({ message: 'Ensayo publicado con éxito.', data: result });
  } catch (error) {
    console.error('Error al publicar el ensayo:', error);
    res.status(500).json({ error: 'Error al publicar el ensayo.' });
  }
};

// Controlador para obtener ensayos publicados
const fetchPublishedEssays = async (req, res) => {
  try {
    const essays = await getPublishedEssays();
    res.json(essays);
  } catch (error) {
    console.error('Error fetching published essays:', error);
    res.status(500).json({ error: 'Error fetching published essays.' });
  }
};

// Controlador para obtener borradores del usuario
const fetchDraftsByUser = async (req, res) => {
  const userId = req.user.id; // Asumiendo que tienes la información del usuario en req.user
  try {
    const drafts = await getDraftsByUser(userId);
    res.json(drafts);
  } catch (error) {
    console.error('Error fetching drafts:', error);
    res.status(500).json({ error: 'Error fetching drafts.' });
  }
};

module.exports = { saveDraftController, publishEssayController, fetchPublishedEssays, fetchDraftsByUser };