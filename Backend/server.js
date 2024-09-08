const express = require('express');
const userRoutes = require('./modules/Routes/userRoutes'); 
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const postRoutes = require('./modules/Routes/postRoutes');
const problemRoutes = require('./modules/Routes/PhiRoutes');


// Configuración de Multer
const upload = multer({ dest: 'uploads/' });

// Rutas para el foro
app.use('/api/posts', postRoutes);

// Servir archivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/problems', problemRoutes);


const app = express();
app.use(cors());
app.use(express.json()); // Para parsear JSON en el cuerpo de las solicitudes

// Utiliza las rutas de usuario
app.use('/api/users', userRoutes);

// Maneja otros middlewares y rutas aquí
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
