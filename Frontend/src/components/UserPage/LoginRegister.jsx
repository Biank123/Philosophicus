import React, { useState } from 'react';
import './LoginRegister.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta o ajusta la ruta según corresponda.


const Login = () => {
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? '/api/users/register' : '/api/users/login';
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };




  return (
    <div className="main">
      <input className='input' type="checkbox" id="chk" aria-hidden="true" checked={isSignup} onChange={toggleForm} />

      <div className="signup">
        <form onSubmit={handleSubmit}>
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
        <form onSubmit={handleSubmit}>
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
    </div>
  );
};


export default Login;