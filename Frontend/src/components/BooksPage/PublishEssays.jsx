import React, { useEffect, useState } from 'react';
import './PublishEssays.css';

const PublishedEssays = () => {
  const [essays, setEssays] = useState([]);

  useEffect(() => {
    const fetchEssays = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:3001/essays/published', {
          method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }); 
        const data = await response.json();

        // Verifica que `data` sea un arreglo
        if (Array.isArray(data)) {
          setEssays(data);
        } else {
          console.error('La respuesta no es un arreglo:', data);
        }
      } catch (error) {
        console.error('Error al obtener los ensayos:', error);
      }
    };

    fetchEssays();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Formato: YYYY-MM-DD
  };

const cleanContent = (html) => {
  // Elimina etiquetas HTML
  const doc = new DOMParser().parseFromString(html, 'text/html');
  let text = doc.body.textContent || "";

  // Reemplaza múltiples espacios con un solo espacio
  text = text.replace(/\s+/g, ' ');

  // Elimina espacios en blanco al inicio y al final
  text = text.trim();

  return text;
};

return (
  <div className="published-essays">
    <h1>Ensayos Publicados en la página</h1>
    <ul>
      {essays.length > 0 ? (
        essays.map(essay => (
          <div key={essay.id}>
            <li>{essay.title}</li>
            <p>{cleanContent(essay.content)}</p> 
            <p>{formatDate(essay.created_at)}</p>
          </div>
        ))
      ) : (
        <li>No hay ensayos publicados.</li>
      )}
    </ul>
  </div>
);
};

export default PublishedEssays;