import React, { useEffect, useState } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import ObjetosList from './components/objetos.component';
import ObjectEditForm from './components/objectEditForm.component';
import { Objeto } from './models/objetos.model';
import axios from 'axios';

function App() {
  const [objetos, setObjetos] = useState<Objeto[]>([]);
  const [selectedObject, setSelectedObject] = useState<Objeto | null>(null);

  const fetchItems = async () => {
    // Obtenemos el listado de objetos del back
    let res = await axios.get(`http://localhost:3001/objetos`);
    res = res.data;
    setObjetos(res.data);
  }

  useEffect(() => {
    // Al momento de cargar la pagina, llamamos al metodo de fetchItems para traernos el listado de objetos
    fetchItems();
  }, []);

  const handleEdit = (objeto: Objeto) => {
      setSelectedObject(objeto);
  };

  const handleSave = async (editedObjeto: Objeto) => {
      // Actualizamos el objeto, y obtenemos los datos nuevamente
      /*
        
        Con este codigo se podria actualizar directamente en el cliente y no llamar al endpoint nuevamente

        const updatedObjetos = objetos.map(obj => {
            if (obj.id === editedObjeto.id) {
                return editedObjeto;
            }
            return obj;
        });

        setObjetos(updatedObjetos);
      
      */

      await axios.put('http://localhost:3001/objetos', editedObjeto);
      fetchItems();
      setSelectedObject(null);
  };

  const handleCancel = async () => {
    setSelectedObject(null);
  }

  return (
    <div>
      <div className="container">
          <h3 className="center-align">Listado de Objetos</h3>
          {!selectedObject && <ObjetosList objetos={objetos} onEdit={handleEdit} />}
          {/* Se podria haber hecho con un modal en vez de un form */}
          {selectedObject && <ObjectEditForm objeto={selectedObject} onSave={handleSave} onCancel={handleCancel} />}
      </div>
    </div>
  );
}

export default App;
