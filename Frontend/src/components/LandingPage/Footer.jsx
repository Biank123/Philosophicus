import React from 'react';
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
                  <li>Consulta contenidos en la base de datos</li>
                  <li>Comparte links y documentos relevantes</li>
                  <li>Página en constante actualización</li>
                  
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* Column2 */}
              <div className="footer-pad">
                <h4>Información</h4>
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
                  <li>Escribe y publica tus ensayos</li>
                  <li>Accede a links relevantes</li>
                  <li>Consulta tus dudas en el Foro</li>
                  <li>Estudia buscando problemas filosóficos</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Conéctate conmigo</h4>
              <ul className="social-network social-circle">
                <li><a href="https://github.com/Biank123" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/bianca-de-petris/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://web.facebook.com/bianca.depetris.5" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">&copy; {new Date().getFullYear()} Philosophicus.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
