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
                <h4>Recursos</h4>
                <ul className="list-unstyled">
                  <li><a href="#">Biblioteca de Textos Filosóficos</a></li>
                  <li><a href="#">Directorio de Contacto de Filósofos</a></li>
                  <li><a href="#">Formularios de Inscripción</a></li>
                  <li><a href="#">Noticias y Actualizaciones</a></li>
                  <li><a href="#">Preguntas Frecuentes</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* Column2 */}
              <div className="footer-pad">
                <h4>Información</h4>
                <ul className="list-unstyled">
                  <li><a href="#">Tutorial del Sitio Web</a></li>
                  <li><a href="#">Accesibilidad</a></li>
                  <li><a href="#">Descargo de Responsabilidad</a></li>
                  <li><a href="#">Política de Privacidad</a></li>
                  <li><a href="#">Términos de Uso</a></li>
                  <li><a href="#">Contacto con el Administrador</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* Column3 */}
              <div className="footer-pad">
                <h4>Explora</h4>
                <ul className="list-unstyled">
                  <li><a href="#">Talleres Filosóficos</a></li>
                  <li><a href="#">Parques y Naturaleza</a></li>
                  <li><a href="#">Eventos Académicos</a></li>
                  <li><a href="#">Cultura y Arte</a></li>
                  <li><a href="#">Comunidad Filosófica</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Conéctate con Nosotros</h4>
              <ul className="social-network social-circle">
                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" className="icoInstagram" title="Instagram"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">&copy; {new Date().getFullYear()} Philosophicus. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
