import React, { useState } from 'react';
import { Objeto } from '../models/objetos.model';

interface ObjetoEditFormProps {
    objeto: Objeto;
    onSave: (editedObject: Objeto) => void; // prop para manejar el boton de guardar
    onCancel: () => void; // prop para manejar el boton de cancelar
}

const ObjectEditForm: React.FC<ObjetoEditFormProps> = ({ objeto, onSave, onCancel }) => {
    const [editedObject, setEditedObject] = useState(objeto);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedObject(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave(editedObject);
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit} className="striped">
            <div className="row">
                <div className="input-field col s4">
                    <span>Nombre</span>
                    <input type="text" name="nombre" value={editedObject.nombre} onChange={handleChange} required />
                </div>
                <div className="input-field col s4">
                    <span>Descripción</span>
                    <input type="text" name="descripcion" value={editedObject.descripcion} onChange={handleChange} required />
                </div>
                <div className="input-field col s4">
                    <span>Precio</span>
                    <input type="number" name="precio" value={editedObject.precio} onChange={handleChange} required />
                </div>
            </div>
            <div className="row">
                <button className="btn waves-effect waves-light red" type="button" onClick={handleCancel}>Cancelar</button>
                <button className="btn waves-effect waves-light blue" type="submit">Guardar</button>
            </div>
        </form>
    );
};

export default ObjectEditForm;
