import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useAuth } from '../UserPage/AuthContext';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchResultsPage from '../DirectoryPage/SearchResultsPage';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [essays, setEssays] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Obtener todos los ensayos
    const fetchEssays = async () => {
      try {
        const response = await fetch(`${apiUrl}/essays/published`);
        const data = await response.json();
        setEssays(data);
      } catch (error) {
        console.error('Error al obtener ensayos:', error);
      }
    };

    fetchEssays();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filtrar ensayos que coincidan con el término de búsqueda
    const filteredEssays = essays.filter((essay) =>
      essay.title.toLowerCase().includes(searchValue) ||
      essay.content.toLowerCase().includes(searchValue)
    );

    setSearchResults(filteredEssays);
    setShowSearchResults(true);
  };

  const handleCloseResults = () => {
    setShowSearchResults(false); // Oculta los resultados
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirigir a la página de resultados de búsqueda o hacer algo con searchResults
    console.log('Resultados de búsqueda:', searchResults);
  };


  const handleLogout = async () => {
    // Elimina el token del localStorage
    localStorage.removeItem('token');
    // Redirige al usuario a la página de inicio de sesión
    navigate('/login');
    logout();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-book-open"></i> Philosophicus
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-home"></i> Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <i className="fas fa-info-circle"></i> Saber más
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bars"></i> Menú de la página
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/select-problem">
                  <i className="fas fa-pencil-alt"></i> Escribir
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/essays/published">
                  <i className="fas fa-book"></i> Publicaciones
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/filosofia">
                  <i className="fas fa-scroll"></i> Estudiar
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/forum">
                  <i className="fas fa-pencil-alt"></i> Foro
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownAuth"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user"></i> {isAuthenticated ? 'Perfil de Usuario' : 'Ingresar'}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownAuth">
              {isAuthenticated ? (
                <>
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <i className="fas fa-user-edit"></i> Editar Perfil
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                    }}>
                      <i className="fas fa-sign-out-alt"></i> Cerrar Sesión
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <Link className="nav-link" to="/login">
                    <i className="fas fa-sign-in-alt"></i> Iniciar sesión
                  </Link>
                </li>
              )}
            </ul>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar en ensayos..."
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <i className="fas fa-search"></i> Buscar
          </button>
        </form>
      </div>
      {showSearchResults && (
        <SearchResultsPage results={searchResults} onClose={handleCloseResults} />
      )}
    </nav>
  );
}

export default Navbar;