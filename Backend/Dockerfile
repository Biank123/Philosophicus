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

# Exponer el puerto que tu aplicación va a utilizar
EXPOSE 17859 

# Inicia la aplicación (Railway asigna el puerto automáticamente)
CMD ["node", "server.js"]

