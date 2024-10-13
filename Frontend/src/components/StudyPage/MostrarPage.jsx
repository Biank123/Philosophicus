import React from 'react';
import './MostrarPage.css';

function ProblemaFilosofico({ problema }) {
  
  if (!problema) {
    return <div>No hay información disponible.</div>;
}
  return (
    <div className="problema-filosofico">
      <h3>{problema.titulo}</h3>
      <p><strong>Preguntas relacionadas:</strong> {problema.preguntasRelacionadas}</p>
      <p><strong>Descripción:</strong> {problema.descripcion}</p>
      <p><strong>Autores:</strong> {problema.autores.join(', ')}</p>
      <p><strong>Tema:</strong> {problema.tema}</p>
    </div>
  );
}

export default ProblemaFilosofico;