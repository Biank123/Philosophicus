import React, { useState } from 'react';
import './EssayTemplate.css';

const EssayTemplate = ({ problem }) => {
  // Definición de las secciones del ensayo
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
  const [reviewResult, setReviewResult] = useState(null);
  const [draftTitle, setDraftTitle] = useState('');

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

  const handleSubmit = async () => {
    const combinedText = sectionTexts.join('\n\n'); // Unir todas las secciones del ensayo
    console.log('Texto enviado al backend:', combinedText);

    try {
      const response = await fetch('http://localhost:3001/revisar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ texto: combinedText }), // Enviar todo el texto junto
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Respuesta del backend:', data);
      setReviewResult(data.revision); // Guardar la revisión para mostrarla
    } catch (error) {
      console.error('Error enviando el texto:', error);
      setReviewResult('Error al enviar el texto para revisión.');
    }
  };

  const handlePublish = async () => {
    const combinedText = sectionTexts.join('\n\n');
    try {
      const response = await fetch('http://localhost:3001/essays/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ texto: combinedText }),
      });

      if (!response.ok) {
        throw new Error('Error al publicar el ensayo.');
      }

      alert('Ensayo publicado con éxito.');
    } catch (error) {
      console.error('Error publicando el ensayo:', error);
      alert('Error al publicar el ensayo.');
    }
  };

  const handleSaveDraft = async () => {
    const combinedText = sectionTexts.join('\n\n');

    try {
      const response = await fetch('http://localhost:3001/essays/save-draft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ title: draftTitle, texto: combinedText }),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el borrador.');
      }

      alert('Borrador guardado con éxito.');
      setDraftTitle(''); // Limpiar el campo de título después de guardar
    } catch (error) {
      console.error('Error guardando el borrador:', error);
      alert('Error al guardar el borrador.');
    }
  };

  return (
    <div className="essay-template">
      <h1>Escribe tu Ensayo</h1>
      {/* Mostrar el problema seleccionado */}
      <div className="problem-section">
        <h2>Problema seleccionado: {problem.titulo}</h2>
        <p>{problem.descripcion}</p>
      </div>
      <div className="title-section">
        <label htmlFor="draft-title">Título del borrador:</label>
        <input
          type="text"
          id="draft-title"
          value={draftTitle}
          onChange={(e) => setDraftTitle(e.target.value)}
          placeholder="Escribe el título aquí..."
        />
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
            <>
              <button onClick={handleSaveDraft}>Guardar en borradores</button>
              <button onClick={handlePublish}>Publicar</button>
              <button onClick={handleSubmit}>Enviar para revisión</button>
            </>
          )}
        </div>
      </div>

      {/* Mostrar el resultado de la revisión */}
      {reviewResult && (
        <div className="review-section">
          <h2>Resultado de la revisión:</h2>
          <p>{reviewResult}</p>
        </div>
      )}

    </div>
  );
};

export default EssayTemplate;