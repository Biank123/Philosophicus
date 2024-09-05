import React, { useState } from 'react';
import './LoginRegister.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta o ajusta la ruta según corresponda.

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="main">
      <input className='input' type="checkbox" id="chk" aria-hidden="true" checked={isSignup} onChange={toggleForm} />

      <div className="signup">
        <form>
          <label className='label' htmlFor="chk" aria-hidden="true">Registrarse</label>
          <input className='input' type="text" name="txt" placeholder="Nombre de Usuario" required />
          <input className='input' type="email" name="email" placeholder="Email" required />
          <input className='input' type="number" name="broj" placeholder="Contraseña" required />
          <input className='input' type="password" name="pswd" placeholder="Confirmar contraseña" required />
          <button className='button' type="submit">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label className='label' htmlFor="chk" aria-hidden="true">Ingresar</label>
          <input className='input' type="email" name="email" placeholder="Email" required />
          <input className='input' type="password" name="pswd" placeholder="Contraseña" required />
          <button className='button' type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;