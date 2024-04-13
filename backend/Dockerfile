# Usa una imagen de Node.js como base
FROM node:latest

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json (si está presente)
COPY package*.json ./

# Instala las dependencias del backend
RUN npm install

# Copia el resto del código del backend
COPY . .

# Expone el puerto 3000 para que las conexiones externas puedan acceder a tu aplicación
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
