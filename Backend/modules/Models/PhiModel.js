const pool = require('../Models/db');

const Problem = {
  // Obtener todos los problemas con sus autores
  async getProblems() {
    const result = await pool.query(`
      SELECT p.id, p.titulo, p.preguntas_relacionadas, p.descripcion, 
             json_agg(a.nombre) AS autores
      FROM problemas_filosoficos p
      LEFT JOIN problemas_autores pa ON p.id = pa.problema_id
      LEFT JOIN autores a ON a.id = pa.autor_id
      GROUP BY p.id
    `);
    return result.rows;
  }
};

module.exports = Problem;