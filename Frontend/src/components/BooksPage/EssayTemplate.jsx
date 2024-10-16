import React, { useState, useEffect } from 'react';
import './EssayTemplate.css';
import ReactQuill from 'react-quill';  // Importa el componente Quill
import 'react-quill/dist/quill.snow.css';  // Importa los estilos de Quill

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
  const [reviewData, setReviewData] = useState({});
  const [draftTitle, setDraftTitle] = useState('');

  const handleChange = (value) => {
    const newTexts = [...sectionTexts];
    newTexts[currentSection] = value; // Actualiza el texto en la sección actual
    console.log('Texto actualizado:', value); // Verifica el texto que se está escribiendo
    setSectionTexts(newTexts);
  };

  useEffect(() => {
    // Solo actualizar si se ha escrito algo
    const savedText = sectionTexts[currentSection];
    handleChange(savedText); // Guarda el texto actual al cambiar de sección
  }, [currentSection]);
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
  const stripHtml = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
};

const handleSubmit = async () => {
    const combinedText = sectionTexts.join('\n\n').trim();

    if (combinedText.length === 0) {
        console.error('No hay contenido para enviar al backend');
        return;
    }

    try {
        const response = await fetch('http://localhost:3001/essays/revisar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ texto: combinedText }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Respuesta del backend:', data);

        // Ajusta cómo asignas reviewData según la respuesta del backend
        setReviewData({
            mensaje: data.mensaje,
            correcciones: data.correcciones.map(correccion => ({
                mensaje: correccion.mensaje,
                sugerencias: correccion.sugerencias,
                contexto: stripHtml(correccion.contexto) // Limpia el contexto
            })),
        });
    } catch (error) {
        console.error('Error enviando el texto:', error);
        setReviewData({
            mensaje: 'Error al enviar el texto para revisión.',
            correcciones: []
        });
    }
};

  const handlePublish = async () => {
    const cleanedTexts = sectionTexts.map(cleanText).map(text => text.trim()).filter(text => text.length > 0); // Limpiar espacios vacíos y etiquetas
    const combinedText = cleanedTexts.join('\n\n'); // Combinar todas las secciones del ensayo
    const title = draftTitle; // Título que se obtiene del estado
    if (combinedText.length === 0) {
      console.error('No hay contenido para enviar al backend');
      return; // Detener la ejecución si el contenido está vacío
    }
    console.log('Texto enviado al backend:', combinedText);
    try {
      const response = await fetch('http://localhost:3001/essays/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ title, content: combinedText }), // Asegúrate de enviar el contenido limpio
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

  const cleanText = (text) => {
    // Elimina todas las etiquetas HTML
    return text.replace(/<\/?[^>]+(>|$)/g, "");
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
        <ReactQuill
          value={sectionTexts[currentSection]} // Pasa el valor de la sección actual
          onChange={handleChange} // Usa el manejador de cambios ajustado
          placeholder={sections[currentSection].placeholder} // Placeholder
        />
        <div>
          <h3>Vista previa del contenido:</h3>
          <h2>Vista previa:</h2>
          <div>
            <p>Sección {currentSection + 1}:</p>
            <div dangerouslySetInnerHTML={{ __html: sectionTexts[currentSection] }}></div>
          </div>
        </div>
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

      <div>
    <h3>IA para revisión gramatical</h3>
    {reviewData && (
        <div className="review-section">
            <h2>Resultados de la revisión:</h2>
            <p>{reviewData.mensaje}</p>

            {/* Verificar si hay correcciones */}
            {reviewData.correcciones && reviewData.correcciones.length > 0 ? (
                reviewData.correcciones.map((correccion, index) => (
                    <div key={index}>
                        <p><strong>Mensaje:</strong> {correccion.mensaje}</p>
                        <p><strong>Contexto:</strong> {correccion.contexto}</p>

                        {/* Mostrar sugerencias, si existen */}
                        {correccion.sugerencias && correccion.sugerencias.length > 0 ? (
                            <div>
                                <h4>Sugerencias:</h4>
                                <ul>
                                    {correccion.sugerencias.map((sugerencia, index) => (
                                        <li key={index}>{sugerencia}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>No hay sugerencias disponibles.</p>
                        )}
                    </div>
                ))
            ) : (
                <p>No se encontraron correcciones.</p>
            )}
        </div>
    )}
</div>

    </div>
  );
};

export default EssayTemplate;