import request from 'supertest';
import { app } from '../index';
import ObjetoModel, { SchemaObjeto } from '../models/Objeto.model';
import { ObjetoController } from '../controllers/objetos.controller';

describe('errorObjeto', () => {
    it('deberia enviar mal un id de objeto y deberia de dar error', async () => {
        // Actualizar un objeto con un id que no existe
        const requestObjeto = await request(app)
        .put('/objetos')
        .send({
            _id: 'error',
            nombre: 'hola mundo',
            descripcion: 'desc',
            precio: 10
        });
        expect(requestObjeto.status).toBe(500);
    });
});

describe('obtenerYActualizarObjeto', () => {
    it('debería obtener un objeto y luego actualizarlo', async () => {
        // Obtener el listado de objetos
        const obtenerObjetosResponse = await request(app).get('/objetos');
        expect(obtenerObjetosResponse.status).toBe(200);
        const objetos = obtenerObjetosResponse.body.data;

        // Verifica que se haya obtenido al menos un objeto
        expect(objetos.length).toBeGreaterThan(0);

        // Selecciona el primer objeto de la lista para actualizar
        const objetoParaActualizar = objetos[0];

        objetoParaActualizar.nombre = 'Nuevo nombre';

        // Actualizar el primer objeto de la lista
        const actualizarObjetoResponse = await request(app)
            .put(`/objetos`)
            .send(objetoParaActualizar);
        
        // Verifica que la actualización haya sido exitosa
        expect(actualizarObjetoResponse.status).toBe(200);
        expect(actualizarObjetoResponse.body.success).toBe(true);
        expect(actualizarObjetoResponse.body.data).toBe('Actualizado con éxito');
    });
});