# Usa una imagen de Node.js como base
FROM node:latest

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json (si está presente)
COPY package*.json ./

# Instala las dependencias del frontend
RUN npm install

# Copia el resto del código del frontend
COPY . .

EXPOSE 3000

# Comando para compilar el frontend
CMD ["npm", "start"]
