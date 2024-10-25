import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              {/* Column1 */}
              <div className="footer-pad">
                <h4>Recursos y otros</h4>
                <ul className="list-unstyled">
                  <li>Comparte tus conocimientos</li>
                  <li>Conecta con otros</li>
                  <li>Página en constante actualización</li>
                  
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* Column2 */}
              <div className="footer-pad">
                <h4>Más Información</h4>
                <ul className="list-unstyled">
                  <li>Resuelve tus dudas:</li>
                  <li>Escríbeme a biancadepetris1998@gmail.com</li>
                  <li>Santiago, Chile</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* Column3 */}
              <div className="footer-pad">
                <h4>Explora la página</h4>
                <ul className="list-unstyled">
                  <li id='links'>
                    <Link to="/select-problem">Escribe y publica tus ensayos</Link></li>
                  <li id='links'>
                    <Link to="/directory">Accede a links relevantes</Link></li>
                  <li id='links'><Link to="/forum">Consulta tus dudas en el Foro</Link></li>
                  <li id='links'><Link to="/filosofia">Estudia buscando problemas filosóficos</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Redes</h4>
              <ul className="social-network social-circle">
                <li><a href="https://github.com/Biank123" className="icoFacebook" title="Github"><i className="fa fa-facebook">G</i></a></li>
                <li><a href="https://www.linkedin.com/in/bianca-de-petris/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin">L</i></a></li>
                <li><a href="https://web.facebook.com/bianca.depetris.5" className="icoTwitter" title="Facebook"><i className="fa fa-twitter">F</i></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">&copy; {new Date().getFullYear()} Philosophicus</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
