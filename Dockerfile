# Imagen base de Node.js
FROM node:18-alpine

# Configurar directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de configuración
COPY package.json package-lock.json ./

# Instalar dependencias (incluso las de desarrollo para nodemon)
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto del servidor
EXPOSE 4000

# Comando por defecto
CMD ["npm", "run", "dev"]
