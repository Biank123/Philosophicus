import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ContentPage() {
  const { tipo, valor: nombre } = useParams(); // Ejemplo: tipo='tema', valor='Ética'
  const [contenido, setContenido] = useState(null);
  const [epocaId, setEpocaId] = useState(null);

  useEffect(() => {
    const fetchIdAndDetails = async () => {
      let idUrl = '';
      let detailsUrl = '';

      if (tipo === 'autor') {
        idUrl = `http://localhost:3001/api/filter/autores/nombre/${nombre}`;
      } else if (tipo === 'tema') {
        idUrl = `http://localhost:3001/api/filter/temas/nombre/${nombre}`;
      } else if (tipo === 'epoca') {
        idUrl = `http://localhost:3001/api/filter/epocas/nombre/${nombre}`;
      }

      try {
        const idResponse = await fetch(idUrl);
        if (!idResponse.ok) {
          console.error('Error al obtener el ID:', idResponse.statusText);
          return;
        }
        const idData = await idResponse.json();
        console.log('Respuesta del servidor para obtener ID:', idData);

        if (tipo === 'autor') {
          detailsUrl = `http://localhost:3001/api/filter/autores/${idData.id}/descripcion`;
        } else if (tipo === 'tema') {
          detailsUrl = `http://localhost:3001/api/filter/temas/${idData.temaId}/problemas`;
        } else if (tipo === 'epoca') {
          setEpocaId(idData.id);
          return; // Salir aquí ya que los temas se manejarán en otro useEffect
        }

        console.log('URL de detalles:', detailsUrl);
        const detailsResponse = await fetch(detailsUrl);
        if (!detailsResponse.ok) {
          console.error('Error al obtener los detalles:', detailsResponse.statusText);
          return;
        }
        const detailsData = await detailsResponse.json();
        console.log('Datos obtenidos:', detailsData);
        
        // Asegúrate de que `detailsData` sea un arreglo, de lo contrario, ajusta la lógica
        setContenido(detailsData);
        
      } catch (error) {
        console.error('Error en la función fetchIdAndDetails:', error);
      }
    };

    fetchIdAndDetails();
  }, [tipo, nombre]);

  useEffect(() => {
    const fetchTemasPorEpoca = async () => {
      if (tipo === 'epoca' && epocaId) {
        const url = `http://localhost:3001/api/filter/epocas/${epocaId}/temas`;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Error al obtener los temas');
          }
          const data = await response.json();
          console.log('Temas obtenidos:', data); 
          setContenido(data); // Asegúrate de que `data` sea un arreglo
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    fetchTemasPorEpoca();
  }, [tipo, epocaId]);

  return (
    <div>
      <h2>{`Mostrando ${tipo}: ${nombre}`}</h2>
      {contenido ? (
        <div>
          {tipo === 'autor' && <p>{contenido.descripcion}</p>}
          {tipo === 'tema' && contenido.length > 0 && ( // Verifica que haya contenido
            <ul>
              {contenido.map((problema) => (
                <li key={problema.problema_id}>{problema.problema}</li>
              ))}
            </ul>
          )}
          {tipo === 'tema' && contenido.length === 0 && (
            <p>No hay problemas asociados a este tema.</p> // Mensaje si no hay problemas
          )}
          {tipo === 'epoca' && contenido.length > 0 && ( // Verifica que haya contenido
            <ul>
              {contenido.map((tema) => (
                <li key={tema.tema_id}>{tema.tema}</li>
              ))}
            </ul>
          )}
          {tipo === 'epoca' && contenido.length === 0 && (
            <p>No hay temas asociados a esta época.</p> // Mensaje si no hay temas
          )}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ContentPage;