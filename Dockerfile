# Utilizar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json al contenedor
COPY backend/package*.json ./

# Instala las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY backend/ ./

# Exponer el puerto que utiliza tu aplicación (ajusta si es necesario)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
