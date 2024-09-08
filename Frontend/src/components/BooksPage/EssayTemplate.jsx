import React, { useState } from 'react';
import './EssayTemplate.css';

const EssayTemplate = ({ problem }) => {
  // Definición de las secciones del ensayo (mover esto arriba)
  const sections = [
    {
      title: 'Introducción',
      description: 'Escribe una introducción breve que presente el problema filosófico seleccionado y explica qué deseas responder.',
      placeholder: 'Escribe tu introducción aquí...'
    },
    {
      title: 'Argumento 1 - Premisa 1',
      description: 'Escribe la primera premisa de tu primer argumento.',
      placeholder: 'Escribe la primera premisa aquí...'
    },
    {
      title: 'Argumento 1 - Premisa 2',
      description: 'Escribe la segunda premisa de tu primer argumento.',
      placeholder: 'Escribe la segunda premisa aquí...'
    },
    {
      title: 'Argumento 1 - Conclusión',
      description: 'Escribe la conclusión derivada de tus dos premisas del primer argumento.',
      placeholder: 'Escribe la conclusión aquí...'
    },
    {
      title: 'Argumento 2 - Premisa 1',
      description: 'Escribe la primera premisa de tu segundo argumento.',
      placeholder: 'Escribe la primera premisa aquí...'
    },
    {
      title: 'Argumento 2 - Premisa 2',
      description: 'Escribe la segunda premisa de tu segundo argumento.',
      placeholder: 'Escribe la segunda premisa aquí...'
    },
    {
      title: 'Argumento 2 - Conclusión',
      description: 'Escribe la conclusión derivada de tus dos premisas del segundo argumento.',
      placeholder: 'Escribe la conclusión aquí...'
    },
    {
      title: 'Fuentes',
      description: 'Cita las fuentes y referencias externas que has utilizado para respaldar tus argumentos.',
      placeholder: 'Escribe tus fuentes aquí...'
    },
    {
      title: 'Conclusión Final',
      description: 'Resume los puntos clave del ensayo y ofrece una conclusión final que responda a la pregunta planteada.',
      placeholder: 'Escribe la conclusión final aquí...'
    }
  ];

  // Llamar a los hooks después de definir `sections`
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionTexts, setSectionTexts] = useState(Array(sections.length).fill(''));

  // Verificar si `problem` es `null` o `undefined` al inicio
  if (!problem) {
    return <div>No problem selected</div>;
  }

  // Manejador para cambiar la sección
  const handleNext = () => {
    if (sectionTexts[currentSection].trim() === '') {
      alert('Por favor, completa el campo antes de avanzar.');
      return;
    }

    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  // Manejador para cambiar a la sección anterior
  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Manejador para actualizar el texto de la sección
  const handleChange = (e) => {
    const newTexts = [...sectionTexts];
    newTexts[currentSection] = e.target.value;
    setSectionTexts(newTexts);
  };

  return (
    <div className="essay-template">
      <h1>Escribe tu Ensayo</h1>
      {/* Mostrar el problema seleccionado */}
      <div className="problem-section">
        <h2>Problema seleccionado: {problem.titulo}</h2>
        <p>{problem.descripcion}</p>
      </div>
      {/* Sección de escritura */}
      <div className="section">
        <h2>{sections[currentSection].title}</h2>
        <p>{sections[currentSection].description}</p>
        <textarea
          placeholder={sections[currentSection].placeholder}
          value={sectionTexts[currentSection]}
          onChange={handleChange}
        ></textarea>
        <div className="buttons">
          {currentSection > 0 && (
            <button onClick={handlePrevious}>Anterior</button>
          )}
          {currentSection < sections.length - 1 ? (
            <button onClick={handleNext}>Siguiente</button>
          ) : (
            <button onClick={() => alert('Ensayo enviado!')}>Enviar</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EssayTemplate;