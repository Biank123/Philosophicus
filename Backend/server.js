const express = require('express');
const app = express();
const userRoutes = require('./userRoutes'); 

app.use(express.json()); // Para parsear JSON en el cuerpo de las solicitudes

// Utiliza las rutas de usuario
app.use('/api/users', userRoutes);

// Maneja otros middlewares y rutas aquí
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
