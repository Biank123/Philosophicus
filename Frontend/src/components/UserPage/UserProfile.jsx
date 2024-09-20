import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import ChangePasswordForm from './ChangePasswordForm';
import DeleteAccountForm from './DeleteAccountForm';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('config');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [userData, setUserData] = useState(null);
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/users/profile/user', {
          headers: {
             'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data);
        console.log('User data set:', data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    
    const fetchDrafts = async () => {
      try {
        const response = await fetch('http://localhost:3001/essays/drafts', {
          headers: {
             'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDrafts(data);
      } catch (error) {
        console.error('Error fetching drafts:', error);
      }
    };    

    fetchUserData();
    fetchDrafts();
  }, []);

  const handleDeleteAccount = async ({ reason, password }) => {
    try {
      const requestBody = JSON.stringify({
        reason,
        password,
      });
  
      const response = await fetch('http://localhost:3001/profile', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: requestBody,
      });
  
      // Maneja la respuesta
      if (!response.ok) {
        // Lanza un error si la respuesta no es correcta
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Respuesta del servidor:', result);
  
    } catch (error) {
      console.error('Error al eliminar la cuenta:', error);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'config':
        return (
          <div className="section-box">
            <h3>Configuración</h3>
            <p>Aquí irá la información de configuración del usuario.</p>
            <button
              className="change-password-btn"
              onClick={() => setShowPasswordForm(!showPasswordForm)}
            >
              Cambiar Contraseña
            </button>

            {showPasswordForm && <ChangePasswordForm />}
            {/* Botón para eliminar cuenta */}
            <button
              className="delete-account-btn"
              onClick={() => setShowDeleteForm(!showDeleteForm)}
              style={{ marginTop: '10px' }}
            >
              Eliminar Cuenta
            </button>

            {showDeleteForm && (
              <DeleteAccountForm onSubmit={handleDeleteAccount} />
            )}
          </div>

        );
        case 'writings':
          return (
            <div className="section-box">
              <h3>Borradores</h3>
              {drafts.length > 0 ? (
                <ul>
                  {drafts.map(draft => (
                    <li key={draft.id}>{draft.title}</li>
                  ))}
                </ul>
              ) : (
                <p>No hay borradores guardados.</p>
              )}
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
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="Perfil"
          className="profile-image"
        />
        <h2 className="username">{userData ? userData.username : 'Cargando...'}</h2>
        <h3 className="email">{userData ? userData.email : 'Cargando...'}</h3>
      </div>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#config" onClick={() => setActiveSection('config')}>Configuración</a>
          </li>
          <li>
            <a href="#writings" onClick={() => setActiveSection('writings')}>Borradores</a>
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
