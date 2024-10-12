const pool = require('./db'); // Conexión a la base de datos

// Obtener todos los temas
const obtenerTemas = async () => {
    const result = await pool.query('SELECT * FROM temas');
    return result.rows;
};

// Obtener todos los autores
const obtenerAutores = async () => {
    const result = await pool.query('SELECT * FROM autores');
    return result.rows;
};

// Obtener todas las épocas
const obtenerEpocas = async () => {
    const result = await pool.query('SELECT * FROM epocas');
    return result.rows;
};

// Obtener problemas filosóficos asociados a un tema con detalles
const obtenerProblemasPorTema = async (temaId) => {
    const query = 'SELECT * FROM problemas_filosoficos WHERE tema_id = $1';
    const { rows } = await pool.query(query, [temaId]); // Asegúrate de que pool esté definido
    return rows; // Devuelve los problemas encontrados
};

// Obtener la descripción del autor
const obtenerDescripcionAutor = async (autorId) => {
    const result = await pool.query('SELECT descripcion FROM autores WHERE id = $1', [autorId]);
    return result.rows[0];
};

// Obtener temas relacionados a una época con detalles
const obtenerTemasPorEpoca = async (epocaId) => {
    const result = await pool.query(`
        SELECT 
            t.id AS tema_id,
            t.nombre AS tema,
            e.nombre AS epoca
        FROM 
            temas t
        JOIN 
            epocas e ON t.epoca_id = e.id
        WHERE 
            e.id = $1`, 
        [epocaId]
    );
    return result.rows;
};

// Obtener autores relacionados a una época con detalles
const obtenerAutoresPorEpoca = async (epocaId) => {
    const query = `
        SELECT * FROM autores
        WHERE epoca_id = $1
    `;
    const { rows } = await pool.query(query, [epocaId]);
    return rows;
};

// Obtener todos los problemas filosóficos con detalles
const obtenerProblemasConDetalles = async () => {
    const result = await pool.query(`
        SELECT 
            p.id AS problema_id,
            p.titulo AS problema,
            p.descripcion AS descripcion,
            e.nombre AS epoca,
            t.nombre AS tema,
            a.nombre AS autor
        FROM 
            problemas_filosoficos p
        JOIN 
            temas t ON p.tema_id = t.id
        JOIN 
            epocas e ON t.epoca_id = e.id
        JOIN 
            autores_problemas ap ON p.id = ap.problema_id
        JOIN 
            autores a ON ap.autor_id = a.id
    `);
    return result.rows;
};

// Función para obtener el autor por nombre
const getAutorByName = async (nombre) => {
    try {
        const query = 'SELECT id FROM autores WHERE LOWER(nombre) = LOWER($1)';
        const values = [nombre];  // Usa el nombre tal como es para verificar
        const result = await pool.query(query, values);
        
        if (result.rows.length > 0) {
            return result.rows[0]; // Devuelve el primer autor encontrado
        } else {
            return null; // No se encontró el autor
        }
    } catch (error) {
        console.error('Error al obtener el autor por nombre:', error);
        throw error; // Lanza el error para manejarlo en el controlador
    }
};

const getTemaIdByName = async (nombre) => {
    try {
        const query = 'SELECT id FROM temas WHERE LOWER(nombre) = LOWER($1)';
        const values = [nombre];
        
        const result = await pool.query(query, values);
        
        if (result.rows.length > 0) {
            return result.rows[0].id; // Devuelve el ID del primer tema encontrado
        } else {
            return null; // No se encontró el tema
        }
    } catch (error) {
        console.error('Error al obtener el tema por nombre:', error);
        throw error; // Lanza el error para manejarlo en el controlador
    }
};

module.exports = {
    obtenerTemas,
    obtenerAutores,
    obtenerEpocas,
    obtenerProblemasPorTema,
    obtenerDescripcionAutor,
    obtenerTemasPorEpoca,
    obtenerAutoresPorEpoca,
    obtenerProblemasConDetalles,
    getAutorByName,
    getTemaIdByName  
};