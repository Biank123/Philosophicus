import React, { useState } from 'react';
import './EssayTemplate.css';


const EssayTemplate = () => {
  // Definición de las secciones del ensayo
  const sections = [
    {
      title: 'Introducción',
      description: 'Escribe una introducción que presente el tema de tu ensayo y explique por qué es importante.',
      placeholder: 'Escribe tu introducción aquí...'
    },
    {
      title: 'Desarrollo Parte 1',
      description: 'Desarrolla tu primer argumento aquí.',
      placeholder: 'Escribe la primera parte del desarrollo aquí...'
    },
    {
      title: 'Desarrollo Parte 2',
      description: 'Continúa desarrollando tu argumento principal aquí.',
      placeholder: 'Escribe la segunda parte del desarrollo aquí...'
    },
    {
      title: 'Conclusión',
      description: 'Resume los puntos clave de tu ensayo y ofrece una conclusión final.',
      placeholder: 'Escribe tu conclusión aquí...'
    }
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [sectionTexts, setSectionTexts] = useState(Array(sections.length).fill(''));

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