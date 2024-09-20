import React, { useEffect, useState } from 'react';
import './PublishEssays.css';

const PublishedEssays = () => {
  const [essays, setEssays] = useState([]);

  useEffect(() => {
    const fetchEssays = async () => {
      try {
        const response = await fetch('http://localhost:3001/essays/published');
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

  return (
    <div className="published-essays">
      <h1>Ensayos Publicados</h1>
      <ul>
        {essays.length > 0 ? (
          essays.map(essay => (
            <li key={essay.id}>{essay.title}</li>
          ))
        ) : (
          <li>No hay ensayos publicados.</li>
        )}
      </ul>
    </div>
  );
};

export default PublishedEssays;