import { Request, Response } from 'express';
import ModelObjeto, { SchemaObjeto } from '../models/Objeto.model';
import ObjetoService from '../services/objetos.service';
import ObjetoModel from '../models/Objeto.model';

interface ControllerFunction {
    (req: Request, res: Response): Promise<Response>;
}

export function errorHandler(controller: ControllerFunction): ControllerFunction {
    return async (req: Request, res: Response): Promise<Response> => {
        try {
            return await controller(req, res);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: 'Error interno del servidor' });
        }
    };
}

export async function obtenerObjetos(req: Request, res: Response): Promise<Response> {
    // funcion para obtener el listado de objetos
    const objetos = await ObjetoService.obtenerObjetos();
    return res.json({ success: true, data: objetos });
}

export async function obtenerObjetosConFiltro(req: Request, res: Response): Promise<Response> {
    // punto 4
    // endpoint al cual se le envian un listado de campos
    // tal que en la response se devuelven solo esos campos de cada objeto
    const body: {"campos": []} = req.body;
    const objetosConFiltro = await ObjetoService.filtrarCampos(body.campos);
    return res.json({ success: true, data: objetosConFiltro });
}

export async function actualizarObjeto(req: Request, res: Response): Promise<Response> {
    const bodyObjeto: SchemaObjeto = req.body;
    const actualizado = await ObjetoModel.findByIdAndUpdate(req.body._id, bodyObjeto);
    if(!actualizado)  return res.status(400).json({ success: false, error: 'Objeto no encontrado' });

    return res.json({ success: true, data: 'Actualizado con éxito'});
}

export const ObjetoController = {
    obtenerObjetos: errorHandler(obtenerObjetos),
    actualizarObjeto: errorHandler(actualizarObjeto),
    obtenerObjetosConFiltro: errorHandler(obtenerObjetosConFiltro)
};
