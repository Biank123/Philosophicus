const { 
    obtenerTemas, 
    obtenerAutores, 
    obtenerEpocas, 
    obtenerProblemasPorTema, 
    obtenerDescripcionAutor, 
    obtenerTemasPorEpoca, 
    obtenerAutoresPorEpoca  
  } = require('../Models/contentModel');
  
  // Obtener todos los temas
  const getTemas = async (req, res) => {
      try {
          const temas = await obtenerTemas();
          res.json(temas);
      } catch (error) {
          console.error('Error al obtener temas:', error);
          res.status(500).json({ message: 'Error al obtener temas' });
      }
  };
    
  // Obtener todos los autores con descripción
  const getAutores = async (req, res) => {
      try {
          const autores = await obtenerAutores(); 
          res.json(autores);
      } catch (error) {
          console.error('Error al obtener autores:', error);
          res.status(500).json({ message: 'Error al obtener autores' });
      }
  };
    
  // Obtener todas las épocas
  const getEpocas = async (req, res) => {
      try {
          const epocas = await obtenerEpocas();
          res.json(epocas);
      } catch (error) {
          console.error('Error al obtener épocas:', error);
          res.status(500).json({ message: 'Error al obtener épocas' });
      }
  };
    
  // Obtener problemas por tema
  const getProblemasPorTema = async (req, res) => {
      const { temaId } = req.params;
      try {
          const problemas = await obtenerProblemasPorTema(temaId);
          res.json(problemas);
      } catch (error) {
          console.error('Error al obtener problemas por tema:', error);
          res.status(500).json({ message: 'Error al obtener problemas por tema' });
      }
  };
    
  // Obtener descripción del autor
  const getDescripcionAutor = async (req, res) => {
      const { autorId } = req.params;
      try {
          const autor = await obtenerDescripcionAutor(autorId);
          res.json(autor);
      } catch (error) {
          console.error('Error al obtener descripción del autor:', error);
          res.status(500).json({ message: 'Error al obtener la descripción del autor' });
      }
  };
    
  // Obtener temas por época
  const getTemasPorEpoca = async (req, res) => {
      const { epocaId } = req.params;
      try {
          const temas = await obtenerTemasPorEpoca(epocaId);
          res.json(temas);
      } catch (error) {
          console.error('Error al obtener temas por época:', error);
          res.status(500).json({ message: 'Error al obtener temas por época' });
      }
  };
    
  // Obtener autores por época
  const getAutoresPorEpoca = async (req, res) => {
      const { epocaId } = req.params;
      try {
          const autores = await obtenerAutoresPorEpoca(epocaId); 
          res.json(autores);
      } catch (error) {
          console.error('Error al obtener autores por época:', error);
          res.status(500).json({ message: 'Error al obtener autores por época' });
      }
  };
    
  module.exports = {
      getTemas,
      getAutores,
      getEpocas,
      getProblemasPorTema,
      getDescripcionAutor,
      getTemasPorEpoca,
      getAutoresPorEpoca,
  };