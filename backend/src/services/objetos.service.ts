import ObjetoModel from '../models/Objeto.model';
import ModelObjeto, { SchemaObjeto } from '../models/Objeto.model';

export default class ObjetoService {

    // Funcion para obtener el listado de objetos completo
    static async obtenerObjetos(): Promise<SchemaObjeto[]> {
        try {
            return await ModelObjeto.find();
        } catch (error) {
            throw error;
        }
    }

    // Funcion para crear un objeto nuevo
    static async crearObjeto(objetoData: SchemaObjeto): Promise<SchemaObjeto> {
        try {
            const nuevoObjeto = new ObjetoModel(objetoData);
            return await nuevoObjeto.save();
        } catch (error) {
            throw error;
        }
    }

    // Funcion para obtener el listado de objetos pero solo con los campos que se manda en el body

    static async filtrarCampos(campos: []): Promise<Partial<SchemaObjeto>[]> {
        try {
            // Obtener todos los objetos
            const objetos = await this.obtenerObjetos();
            // mapear para devolver solo los campos que estan en el array de campos
            return objetos.map(obj => {
                const objetoFiltrado: Partial<SchemaObjeto> = {};

                campos.forEach(campo => {
                    // si el campo se encuentra, se le agrega
                    objetoFiltrado[campo] = obj[campo];
                });
                
                return objetoFiltrado;
            });
        } catch (error) {
            throw error;
        }
    }
}
