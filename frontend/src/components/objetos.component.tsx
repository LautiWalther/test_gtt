import React from 'react';
import { Objeto } from '../models/objetos.model';

interface ObjetosListProps {
    objetos: Objeto[];
    onEdit: (entity: Objeto) => void;
}

const ObjetosList: React.FC<ObjetosListProps> = ({ objetos, onEdit }) => {
    return (
        <table className="striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {objetos.map(entity => (
                    <tr key={entity.id}>
                        <td>{entity.nombre}</td>
                        <td>{entity.descripcion}</td>
                        <td>${entity.precio}</td>
                        <td><button className="btn waves-effect waves-light" onClick={() => onEdit(entity)}>Editar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ObjetosList;
