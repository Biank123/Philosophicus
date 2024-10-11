// Esta página permite seleccionar si se quiere filtrar por autor, tema o época, y redirige a la página 
// correspondiente de opciones específicas

import { useNavigate } from 'react-router-dom';

function FilterPage() {
  const navigate = useNavigate();

  const handleFilter = (tipo) => {
    navigate(`/filter/${tipo}`);
  };

  return (
    <div>
        <h1>Material de estudio</h1>
      <h2>Selecciona un filtro para el contenido</h2>
      <button onClick={() => handleFilter('autor')}>Filtrar por Autor</button>
      <button onClick={() => handleFilter('tema')}>Filtrar por Tema</button>
      <button onClick={() => handleFilter('epoca')}>Filtrar por Época</button>
    </div>
  );
}

export default FilterPage;
