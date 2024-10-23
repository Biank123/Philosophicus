import React from 'react';
import { Link  } from 'react-router-dom';
import './SearchResultsPage.css'; 

const SearchResults = ({ results, onClose }) => {
  return (
    <div className="search-results-container">
     <button className="close-button" onClick={onClose}>
        X
      </button>
      <ul>
        <h5>Resultados de búsqueda:</h5>
        {results.length > 0 ? (
          results.map((result, index) => (
            <li key={index}>
              <strong>{result.type}</strong>
              <Link className='link' to={'/essays/published'}>Ensayo: {result.title || result.content}</Link>
            </li>
          ))
        ) : (
          <li>No se encontraron resultados.</li>
        )}
      </ul>
      
    </div>
  );
};

export default SearchResults;