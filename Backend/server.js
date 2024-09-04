const express = require('express');
const app = express();
const userRoutes = require('./userRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
