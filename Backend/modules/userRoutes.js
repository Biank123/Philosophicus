const express = require('express');
const router = express.Router();
const userController = require('./userController');
const upload = require('./uploadMiddleware');


router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);


// Ruta para subir un archivo
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;




module.exports = router;
