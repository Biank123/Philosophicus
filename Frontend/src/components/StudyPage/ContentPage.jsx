import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ContentPage() {
  const { tipo, valor } = useParams(); // Ejemplo: tipo='autor', valor='Platón'
  const [contenido, setContenido] = useState(null);

  useEffect(() => {
    const fetchContenido = async () => {
      let url = '';

      // Definir la URL adecuada según el tipo de filtro
      if (tipo === 'autor') {
        // Obtener la descripción del autor
        url = `http://localhost:3001/api/filter/autores/${valor}/descripcion`;
      } else if (tipo === 'tema') {
        // Obtener problemas asociados al tema
        url = `http://localhost:3001/api/filter/temas/${valor}/problemas`;
      } else if (tipo === 'epoca') {
        // Obtener los temas y autores relacionados a la época
        url = `http://localhost:3001/api/filter/epocas/${valor}/temas`; // También podrías hacer otra solicitud para los autores relacionados
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener el contenido');
        }
        const data = await response.json();
        setContenido(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchContenido();
  }, [tipo, valor]);

  return (
    <div>
      <h2>{`Mostrando ${tipo}: ${valor}`}</h2>
      {contenido ? (
        <div>
          {/* Mostrar el contenido según el tipo */}
          {tipo === 'autor' && <p>{contenido.descripcion}</p>}
          {tipo === 'tema' && (
            <ul>
              {contenido.map((problema) => (
                <li key={problema.id}>{problema.titulo}</li>
              ))}
            </ul>
          )}
          {tipo === 'epoca' && (
            <ul>
              {contenido.map((tema) => (
                <li key={tema.id}>{tema.nombre}</li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ContentPage;