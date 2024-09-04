import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { useAuth } from '../UserPage/AuthContext'; 
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="#">
        <i className="fas fa-book-open"></i> Philosophicus
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fas fa-home"></i> Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-info-circle"></i> Quiénes somos
            </a>
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
                <a className="dropdown-item" href="#">
                  <i className="fas fa-pencil-alt"></i> Escribir
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-book"></i> Publicar
                </a>
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
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user-edit"></i> Editar Perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={logout}>
                      <i className="fas fa-sign-out-alt"></i> Cerrar Sesión
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-sign-in-alt"></i> Iniciar sesión
                  </a>
                </li>
              )}
            </ul>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <i className="fas fa-search"></i> Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;