const { pool } = require('../Models/db');
const { 
    obtenerTemas, 
    obtenerAutores, 
    obtenerEpocas, 
    obtenerProblemasPorTema, 
    obtenerDescripcionAutor, 
    obtenerTemasPorEpoca, 
    getAutorByName,
    getTemaIdByName
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
    const id = parseInt(temaId, 10); // Asegúrate de convertirlo a entero
    if (isNaN(id)) {
        return res.status(400).json({ message: 'El temaId debe ser un número' });
    }

    console.log('temaId recibido:', id); // Para depuración
    try {
        const problemas = await obtenerProblemasPorTema(id);
        res.json(problemas);
    } catch (error) {
        console.error('Error al obtener problemas por tema:', error);
        res.status(500).json({ message: 'Error al obtener problemas por tema', error: error.message });
    }
};

// Obtener descripción del autor
const getDescripcionAutor = async (req, res) => {
    const { autorId } = req.params;
    const id = parseInt(autorId, 10); // Asegúrate de convertirlo a entero
    if (isNaN(id)) {
        return res.status(400).json({ message: 'El autorId debe ser un número' });
    }

    try {
        const autor = await obtenerDescripcionAutor(id);
        res.json(autor);
    } catch (error) {
        console.error('Error al obtener descripción del autor:', error);
        res.status(500).json({ message: 'Error al obtener la descripción del autor', error: error.message });
    }
};

// Obtener temas por época
const getTemasPorEpoca = async (req, res) => {
    const { epocaId } = req.params;
    const id = parseInt(epocaId, 10); // Asegúrate de convertirlo a entero
    if (isNaN(id)) {
        return res.status(400).json({ message: 'El epocaId debe ser un número' });
    }

    try {
        const temas = await obtenerTemasPorEpoca(id);
        res.json(temas);
    } catch (error) {
        console.error('Error al obtener temas por época:', error);
        res.status(500).json({ message: 'Error al obtener temas por época', error: error.message });
    }
};

// Obtener autores por época
const getAutoresPorEpoca = async (req, res) => {
    const { epocaId } = req.params;
    const id = parseInt(epocaId, 10); // Asegúrate de convertirlo a entero

    if (isNaN(id)) {
        return res.status(400).json({ message: 'El epocaId debe ser un número' });
    }

    try {
        const autores = await pool.query(`
            SELECT * 
            FROM autores 
            WHERE epoca_id = $1
        `, [id]);

        res.json(autores.rows);  // Asegúrate de retornar solo los rows
    } catch (error) {
        console.error('Error al obtener autores por época:', error);
        res.status(500).json({ message: 'Error al obtener autores por época', error: error.message });
    }
};

const getEpocaPorNombre = async (req, res) => {
    const { nombre } = req.params; // Obtenemos el nombre de la época de los parámetros
    try {
        const query = 'SELECT * FROM epocas WHERE nombre = $1'; // Consulta para obtener la época
        const result = await pool.query(query, [nombre]); // Ejecutamos la consulta

        if (result.rows.length > 0) {
            res.json(result.rows[0]); // Enviar la primera época encontrada
        } else {
            res.status(404).json({ message: 'Época no encontrada' }); // Manejar el caso donde no se encuentra la época
        }
    } catch (error) {
        console.error('Error al obtener la época:', error); // Imprimir el error en la consola
        res.status(500).json({ message: 'Error al obtener la época' }); // Manejo de errores
    }
};

const getAutorByNombre = async (req, res) => {
    const nombre = req.params.nombre; // Obtener el nombre del parámetro de la ruta
    console.log("Nombre recibido:", nombre); // Agregar log para verificar el nombre

    try {
        const autor = await getAutorByName(nombre);
        
        if (autor) {
            res.json(autor); // Responde con el autor encontrado
        } else {
            res.status(404).json({ error: "Autor no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
};

const getTemaController = async (req, res) => {
    const nombreTema = req.params.nombre; // Asumiendo que este es el nombre del tema
    try {
        const temaId = await getTemaIdByName(nombreTema);
        
        if (temaId) {
            // Ahora puedes usar temaId para buscar otros datos relacionados
            res.json({ temaId }); // O la información que necesites devolver
        } else {
            res.status(404).json({ error: "Tema no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
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
      getEpocaPorNombre,
      getAutorByNombre,
      getTemaController
      
  };