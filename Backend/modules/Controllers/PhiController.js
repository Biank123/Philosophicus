const Problem = require('../Models/PhiModel');

const problemController = {
  // Controlador para obtener todos los problemas
  async getProblems(req, res) {
    try {
      const problems = await Problem.getProblems();
      res.json(problems);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener la lista de problemas filosóficos.');
    }
  }
};

module.exports = problemController;