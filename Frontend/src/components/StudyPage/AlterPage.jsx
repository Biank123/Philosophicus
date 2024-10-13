import React, { useState } from 'react';
import ProblemaFilosofico from './MostrarPage';
import problemasFilosoficos from './PropsAlternative'; 
import './AlterPage.css';

function FilosofiaPage() {
    const [problemaSeleccionado, setProblemaSeleccionado] = useState(null);
    const [busqueda, setBusqueda] = useState('');

    // Filtrar problemas filosóficos basado en la búsqueda
    const handleBusquedaChange = (e) => {
      setBusqueda(e.target.value);
      // reiniciar la selección al cambiar la búsqueda
      setProblemaSeleccionado(null);
    };
  
    // Manejar el clic en un problema
    const handleProblemaClick = (problema) => {
      setProblemaSeleccionado(problema);
      setBusqueda(''); // Reiniciar la búsqueda al seleccionar un problema
  };
  
    // Filtrar problemas según la búsqueda
    const problemasFiltrados = problemasFilosoficos.filter(problema => 
      problema.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );
  
    return (
      <div className="filosofia-page">
        <h1>Buscar Contenido:</h1>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Escribe para buscar contenido filosófico..." 
          value={busqueda} 
          onChange={handleBusquedaChange} 
        />
  
        <div>
          {busqueda && problemasFiltrados.length > 0 && (
            <ul className="problem-list">
              {problemasFiltrados.map((problema) => (
                <li key={problema.id} onClick={() => handleProblemaClick(problema)}>
                  {problema.titulo}
                </li>
              ))}
            </ul>
          )}
        </div>
  
        <div className="problem-details">
          {problemaSeleccionado ? (
            <ProblemaFilosofico problema={problemaSeleccionado} />
          ) : (
            <p className="no-problem-message">Selecciona un problema para ver los detalles.</p>
          )}
        </div>
      </div>
    );
  }
  
  export default FilosofiaPage;

