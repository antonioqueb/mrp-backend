# Imagen base de Node.js
FROM node:18-alpine

# Configurar directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package.json package-lock.json ./

# Instalar TODAS las dependencias (incluyendo las de desarrollo)
RUN npm ci --include=dev

# Copiar el código fuente
COPY . .

# Exponer el puerto del servidor
EXPOSE 4000

# Comando por defecto
CMD ["npm", "run", "dev"]