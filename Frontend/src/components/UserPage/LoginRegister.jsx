import React, { useState } from 'react';
import './LoginRegister.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta o ajusta la ruta según corresponda.

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" checked={isSignup} onChange={toggleForm} />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="txt" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="number" name="broj" placeholder="BrojTelefona" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button type="submit">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;