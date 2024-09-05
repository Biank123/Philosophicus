const multer = require('multer');
const path = require('path');

// Configura el almacenamiento de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`); // Nombre del archivo
  },
});

// Filtros de archivo
const fileFilter = (req, file, cb) => {
  // Acepta solo imágenes, PDFs y documentos Word
  const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/;
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extName) {
    return cb(null, true);
  }
  cb(new Error('Tipo de archivo no permitido'), false);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // Tamaño máximo de archivo: 5MB
});

module.exports = upload;