const { saveDraft, publishEssay, getPublishedEssays, getDraftsByUser, getPublishedUserEssays } = require('../Models/publishModel');
const jwt = require('jsonwebtoken'); // Asegúrate de tener jwt importado para decodificar el token
const { pool } = require('../Models/db');

// Controlador para guardar borradores
const saveDraftController = async (req, res) => {
  const userId = req.user?.id; // Usar encadenamiento opcional para evitar errores

  // Verificar que se proporciona el userId
  if (!userId) {
    return res.status(401).json({ error: 'Usuario no autenticado' });
  }

  const { title, texto } = req.body;

  // Verificar que se proporcionen los datos necesarios
  if (!title || !texto) {
    return res.status(400).json({ error: 'Título y texto son obligatorios' });
  }

  // Probar la conexión
  try {
    const testConnection = await pool.query('SELECT NOW()');
    console.log('Conexión exitosa:', testConnection.rows);
  } catch (err) {
    console.error('Error de conexión:', err);
    return res.status(500).json({ error: 'Error de conexión a la base de datos.', details: err.message });
  }

  // Guardar el borrador
  try {
    const result = await saveDraft(userId, title, texto);
    res.status(200).json({ message: 'Borrador guardado con éxito.', data: result });
  } catch (error) {
    console.error('Error al guardar el borrador:', error);
    res.status(500).json({ error: 'Error al guardar el borrador.', details: error.message });
  }
};

const publishEssayController = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id; 
    const createdAt = new Date();

    const result = await publishEssay(title, content, userId, createdAt); // Pasa el userId a la función de publicación
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
    console.log(essays); 
    res.json(essays);
  } catch (error) {
    console.error('Error fetching published essays:', error);
    res.status(500).json({ error: 'Error fetching published essays.' });
  }
};

// Controlador para obtener borradores del usuario
const fetchDraftsByUser = async (req, res) => {
  const userId = req.user.id; 
  try {
    const drafts = await getDraftsByUser(userId);
    res.json(drafts);
  } catch (error) {
    console.error('Error fetching drafts:', error);
    res.status(500).json({ error: 'Error fetching drafts.' });
  }
};
const fetchPublishedEssaysByUser = async (req, res) => {
  const { userId } = req.params;
  console.log('ID del usuario:', userId); // Verifica si el userId llega correctamente

  try {
      // Obtén los ensayos utilizando la función del modelo
      const essays = await getPublishedUserEssays(userId);
      
      // Verifica si se encontraron ensayos
      if (essays.length === 0) {
          return res.status(404).json({ message: 'No se encontraron ensayos publicados para este usuario.' });
      }

      // Devuelve los ensayos encontrados
      res.status(200).json(essays);
  } catch (error) {
      console.error('Error al obtener los ensayos publicados:', error);
      res.status(500).json({ message: 'Error al obtener los ensayos publicados' });
  }
};

module.exports = { saveDraftController, fetchPublishedEssaysByUser, publishEssayController, fetchPublishedEssays, fetchDraftsByUser };