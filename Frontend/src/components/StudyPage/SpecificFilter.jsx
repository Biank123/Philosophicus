import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SpecificFilter() {
  const { tipo } = useParams(); // Puede ser 'autor', 'tema' o 'epoca'
  const [opciones, setOpciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOpciones = async () => {
      let url = '';
      if (tipo === 'autor') {
        url = 'http://localhost:3001/api/filter/api/filter/autores'; // Ruta del backend para obtener autores
      } else if (tipo === 'tema') {
        url = 'http://localhost:3001/api/filter/api/filter/temas'; // Ruta del backend para obtener temas
      } else if (tipo === 'epoca') {
        url = 'http://localhost:3001/api/filter/api/filter/epocas'; // Ruta del backend para obtener épocas
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setOpciones(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOpciones();
  }, [tipo]);

  const handleOpcionSeleccionada = (opcion) => {
    // Redirigir a la página de contenido seleccionado
    navigate(`/content/${tipo}/${opcion}`);
  };

  return (
    <div>
      <h2>Seleccionar {tipo}</h2>
      <ul>
        {opciones.map((opcion) => (
          <li key={opcion.id} onClick={() => handleOpcionSeleccionada(opcion.nombre)}>
            {opcion.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpecificFilter;