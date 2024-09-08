const pool = require('../Models/db');

const Problem = {
  // Obtener todos los problemas sin los autores
  async getProblems() {
    const result = await pool.query(`
      SELECT id, titulo, preguntas_relacionadas, descripcion
      FROM problemas_filosoficos
    `);
    return result.rows;
  },

  // Obtener un problema por ID
  async getProblemById(id) {
    const result = await pool.query(`
      SELECT id, titulo, preguntas_relacionadas, descripcion
      FROM problemas_filosoficos
      WHERE id = $1
    `, [id]);
    return result.rows[0];
  }
};

module.exports = Problem;