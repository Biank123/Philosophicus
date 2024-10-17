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
        setProblemaSeleccionado(null);
    };

    // Manejar el clic en un problema
    const handleProblemaClick = (problema) => {
        setProblemaSeleccionado(problema);
        setBusqueda(''); // Reiniciar la búsqueda al seleccionar un problema
    };

    // Filtrar problemas según la búsqueda o mostrar todos si no hay búsqueda
    const problemasFiltrados = busqueda
        ? problemasFilosoficos.filter(problema => 
            problema.titulo.toLowerCase().includes(busqueda.toLowerCase())
          )
        : problemasFilosoficos;

    return (
      <div className="filosofia-page">
        <h1>Buscar Contenido:</h1>
        {!problemaSeleccionado && (
          <>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Escribe para buscar contenido filosófico..." 
              value={busqueda} 
              onChange={handleBusquedaChange} 
            />

            <ul className="problem-list">
              {problemasFiltrados.map((problema) => (
                <li key={problema.id} onClick={() => handleProblemaClick(problema)}>
                  {problema.titulo}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="problem-details">
          {problemaSeleccionado ? (
            <>
              <button className='botonVolver' onClick={() => setProblemaSeleccionado(null)}>
                Volver a la lista
              </button>
              <ProblemaFilosofico problema={problemaSeleccionado} />
            </>
          ) : (
            <p className="no-problem-message">Selecciona un problema para ver los detalles.</p>
          )}
        </div>
      </div>
    );
}

export default FilosofiaPage;