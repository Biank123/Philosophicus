import React, { useState } from 'react';
import './LoginRegister.css'; 
import { useAuth } from './AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const endpoint = 'http://localhost:3001/api/users/register';

    try {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); 
      setSuccessMessage('Registration successful! You can now log in.');
      alert('Usuario registrado con éxito.');
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred, please try again.');
      alert('Ocurrió un error, por favor intente nuevamente.');
    }
  };
  
const handleLoginSubmit = async (e) => {
  e.preventDefault();
  const endpoint = 'http://localhost:3001/api/users/login';

  try {
      const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: formData.email,
              password: formData.password,
          }),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);   // Guarda el token
      localStorage.setItem('userId', data.userId); // Guarda el userId correctamente
      window.location.href = '/profile'; 
  } catch (error) {
      console.error('Error:', error);
  }
};

  return (
    <div className="main">
      <input className='input' type="checkbox" id="chk" aria-hidden="true" checked={isSignup} onChange={toggleForm} />

      <div className="signup">
        <form onSubmit={handleRegisterSubmit}>
          <label className='label' htmlFor="chk" aria-hidden="true">Registrarse</label>
          <input
            className='input'
            type="text"
            name="username"
            placeholder="Nombre de Usuario"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            className='input'
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className='input'
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            className='input'
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <button className='button' type="submit">Registrarse</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleLoginSubmit}>
          <label className='label' htmlFor="chk" aria-hidden="true">Ingresar</label>
          <input
            className='input'
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className='input'
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button className='button' type="submit">Ingresar</button>
        </form>
      </div>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};


export default Login;