import ObjetoService from './services/objetos.service';
import { SchemaObjeto } from './models/Objeto.model';

async function cargarObjetosIniciales() {
    // Verificar si ya existen objetos en la base de datos
    const objetosExistentes = await ObjetoService.obtenerObjetos();
    if (objetosExistentes.length === 0) {
        // Si no existen objetos, cargar los objetos iniciales
        const objetosAgregar = [
            { nombre: 'mate', descripcion: 'de calabaza', precio: 32000 },
            { nombre: 'bombilla', descripcion: 'tipo camionero', precio: 6000 },
            { nombre: 'termo', descripcion: 'con pico cebador', precio: 123000 }
        ];

        objetosAgregar.forEach(async objeto => {
            const nuevoObjeto: SchemaObjeto = objeto;
            const objetoCreado = await ObjetoService.crearObjeto(nuevoObjeto);
        });
    }
}

cargarObjetosIniciales().then(() => {
    console.log('Objetos cargados exitosamente');
}).catch(error => {
    console.error('Error al cargar objetos:', error);
});
