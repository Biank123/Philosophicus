const { Pool } = require('pg');
require('dotenv').config();

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD, 
//     port: process.env.DB_PORT,
//   });

const isProduction = process.env.NODE_ENV === 'production'; 

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : undefined, 
    user: isProduction ? undefined : process.env.DB_USER, 
    host: isProduction ? undefined : process.env.DB_HOST,
    database: isProduction ? undefined : process.env.DB_NAME,
    password: isProduction ? undefined : process.env.DB_PASSWORD,
    port: isProduction ? undefined : process.env.DB_PORT,
});

// Conectar y manejar errores
pool.connect()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos', err));

  module.exports = {
    query: (text, params) => pool.query(text, params),
    pool: pool,
  };