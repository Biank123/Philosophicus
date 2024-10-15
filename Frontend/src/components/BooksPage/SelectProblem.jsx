import React, { useState, useEffect } from 'react';
import './SelectProblem.css';
import { useNavigate } from 'react-router-dom';

const SelectProblem = ({ onSelect }) => {
  const [problems, setProblems] = useState([]);
  const [selectedProblemId, setSelectedProblemId] = useState('');
  const navigate = useNavigate();  // Obtenemos navigate para usarlo más tarde

  useEffect(() => {
    fetch('http://localhost:3001/problems')
      .then(response => response.json())
      .then(data => {
        console.log('Datos recibidos:', data); 
        setProblems(data);
      })
      .catch(error => console.error('Error fetching problems:', error));
  }, []);

  const handleSelect = (event) => {
    setSelectedProblemId(event.target.value); // Guardamos el ID seleccionado
  };

  const handleConfirm = () => {
    if (selectedProblemId) {
      onSelect(selectedProblemId, navigate);  // Pasamos navigate también
    } else {
      alert('Por favor, selecciona un problema.');
    }
  };

  return (
    <div className='select-problem-container'>
      <h1>Selecciona un Problema Filosófico</h1>
      <select onChange={handleSelect} value={selectedProblemId}>
        <option value="">Seleccione un problema</option>
        {problems.map(problem => (
          <option key={problem.id} value={problem.id}>
            {problem.titulo}
          </option>
        ))}
      </select>
      <button onClick={handleConfirm}>Confirmar Selección</button>
    </div>
  );
};

export default SelectProblem;