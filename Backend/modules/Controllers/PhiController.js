const Problem = require('../Models/PhiModel');

const problemController = {
  // Controlador para obtener todos los problemas
  async getProblems(req, res) {
    try {
      const problems = await Problem.getProblems();
      res.json(problems);
    } catch (err) {
      console.error('Error fetching problems:', err);
      res.status(500).send('Error al obtener la lista de problemas filosóficos.');
    }
  },

  // Controlador para obtener un problema por ID
  async getProblemById(req, res) {
    const problemId = req.params.id;
    try {
      const problem = await Problem.getProblemById(problemId);
      if (problem) {
        res.json(problem);
      } else {
        res.status(404).json({ message: 'Problem not found' });
      }
    } catch (error) {
      console.error('Error fetching problem by ID:', error);
      res.status(500).json({ message: 'Error retrieving problem' });
    }
  }
};

module.exports = problemController;