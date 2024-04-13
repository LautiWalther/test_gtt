import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import loggerMiddleware from './middlewares/logger.middleware';
import RequestModel from './models/Request.model';
import objetoRoutes from './routes/objetos.route';
import cors from 'cors';

const app = express();
const port = 3001;

mongoose.connect('mongodb://mongodb:27017/gtt_test')
.then(() => console.log('Conexión a MongoDB establecida'))
.catch(error => console.error('Error al conectar a MongoDB:', error));

// Este archivo es para cargar los datos base de objetos si es que no estan
import './init';

// Configuramos el middleware que loggea las peticiones
app.use(loggerMiddleware);

app.use(express.json());

app.use(cors());

// Agregamos las rutas de los objetos
app.use('/objetos', objetoRoutes);


app.get('/', async (req, res) => {
  return res.json({
    success: true,
    data: {
      message: 'Hello World'
    }
  })
});

// Este endpoint es solo para ver el listado de las peticiones que se generaron
app.get('/peticiones', async (req, res) => {
  try {
    const requests = await RequestModel.find();
    return res.json({
      success: true,
      data: requests
    });
  }catch(error) {
    console.error(error);
    return res.json({
      success: false,
      error: error
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export { app } //para test