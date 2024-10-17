import React from 'react';
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
              <strong>{result.type}</strong>: {result.title || result.content}
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