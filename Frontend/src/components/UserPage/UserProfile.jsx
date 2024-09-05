import React, { useState } from 'react';
import './UserProfile.css';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('config');

  const renderSection = () => {
    switch (activeSection) {
      case 'config':
        return (
          <div className="section-box">
            <h3>Configuración</h3>
            <p>Aquí irá la información de configuración del usuario.</p>
          </div>
        );
      case 'writings':
        return (
          <div className="section-box">
            <h3>Escritos</h3>
            <p>Aquí irá la lista de escritos del usuario.</p>
          </div>
        );
      case 'reviews':
        return (
          <div className="section-box">
            <h3>Revisiones</h3>
            <p>Aquí irá la lista de revisiones del usuario.</p>
          </div>
        );
      case 'scores':
        return (
          <div className="section-box">
            <h3>Puntajes</h3>
            <p>Aquí irá la información de puntajes del usuario.</p>
          </div>
        );
      case 'comments':
        return (
          <div className="section-box">
            <h3>Comentarios</h3>
            <p>Aquí irá la lista de comentarios del usuario.</p>
          </div>
        );
      case 'posts':
        return (
          <div className="section-box">
            <h3>Publicaciones</h3>
            <p>Aquí irá la lista de publicaciones del usuario.</p>
          </div>
        );
      default:
        return (
          <div className="section-box">
            <h3>Selecciona una sección</h3>
            <p>Por favor, selecciona una sección del menú para ver más detalles.</p>
          </div>
        );
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src="https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-image_2916211.jpg" 
          alt="Perfil" 
          className="profile-image" 
        />
        <h2 className="username">Nombre del Usuario</h2>
      </div>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#config" onClick={() => setActiveSection('config')}>Configuración</a>
          </li>
          <li>
            <a href="#writings" onClick={() => setActiveSection('writings')}>Escritos</a>
          </li>
          <li>
            <a href="#reviews" onClick={() => setActiveSection('reviews')}>Revisiones</a>
          </li>
          <li>
            <a href="#scores" onClick={() => setActiveSection('scores')}>Puntajes</a>
          </li>
          <li>
            <a href="#comments" onClick={() => setActiveSection('comments')}>Comentarios</a>
          </li>
          <li>
            <a href="#posts" onClick={() => setActiveSection('posts')}>Publicaciones</a>
          </li>
        </ul>
      </div>
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
};

export default ProfilePage;
