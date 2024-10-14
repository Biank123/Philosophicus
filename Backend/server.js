const express = require('express');
const cors = require('cors');

const path = require('path');
const userRoutes = require('./modules/Routes/userRoutes'); 
const postRoutes = require('./modules/Routes/postRoutes');
const problemRoutes = require('./modules/Routes/PhiRoutes');

const essayRoutes = require('./modules/Routes/essayRoutes');
const contentRoutes = require('./modules/Routes/contentRoutes');

// Crea la aplicación de Express
const app = express();

// Middleware para CORS y parsear JSON
app.use(cors());
app.use(express.json());

// Servir archivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'modules/uploads')));

// Rutas para el foro
app.use('/api/posts', postRoutes);

// Rutas de usuario
app.use('/api/users', userRoutes);

// Rutas para los problemas filosóficos
app.use('/problems', problemRoutes);

// Rutas para publicar o guardar ensayos
app.use('/essays', essayRoutes);

// Rutas para mostrar contenido filtrado de estudio
app.use('/api/filter', contentRoutes);

// Iniciar el servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});