# Prueba Técnica GTT

## Inicialización del Proyecto

Siga los siguientes pasos para iniciar el proyecto en su entorno local:

### Clonar el Repositorio

```bash
git clone https://github.com/LautiWalther/test_gtt.git
```

### Dirigirnos a la carpeta del repositorio
```bash
cd test_gtt
```

### Inicializar el repositorio con docker
```bash
docker-compose up --build
```

### Acceso a la aplicacion
Para acceder a la aplicacion dirijase a http://localhost:3000

### Pruebas
Para acceder a los unit test es necesario instalar las dependencias en el backend y ejecutar jest
```bash
cd backend
npm i
npx jest
```