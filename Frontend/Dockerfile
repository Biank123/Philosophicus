# Usa una imagen base de Node 20
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación
RUN npm run build

# Usa un servidor estático para servir la aplicación
RUN npm install -g serve

# Inicia la aplicación (Railway asigna el puerto automáticamente)
CMD ["serve", "-s", "build", "-l", "0.0.0.0:$PORT"]

