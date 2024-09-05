import React, { useState } from 'react';
import './ChangePasswordForm.css';

const ChangePasswordForm = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (newPassword !== confirmPassword) {
        setMessage('Las nuevas contraseñas no coinciden.');
        return;
      }
  
      try {
        // Hacer solicitud al backend para cambiar la contraseña
        const response = await fetch('http://localhost:3001/api/users/profile/change-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify({
            currentPassword,
            newPassword
          })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setMessage('Contraseña cambiada exitosamente.');
        } else {
          setMessage(data.error || 'Error al cambiar la contraseña.');
        }
      } catch (error) {
        setMessage('Error del servidor.');
      }
    };
  
    return (
      <div className="password-change-container">
        <h2>Cambiar Contraseña</h2>
        <form className="password-change-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="currentPassword">Contraseña Actual</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Nueva Contraseña</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Nueva Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Cambiar Contraseña</button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    );
  };

export default ChangePasswordForm;
