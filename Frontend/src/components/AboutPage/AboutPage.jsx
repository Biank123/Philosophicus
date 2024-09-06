import React from 'react';
import './AboutPage.css'; 

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23m9gO2_ap9ZmY_2E_Leo5QyC0lTZDslG7Q&s" alt="Bianca" className="profile-photo" />
        <h1>Sobre Mí</h1>
        <p>Hola, soy Bianca de Petris, una desarrolladora apasionada por la tecnología y el aprendizaje continuo. Aquí puedes conocer un poco más sobre mí, mi experiencia y cómo puedes apoyar mi trabajo.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/bianca-de-petris/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Biank123" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <a href="/cv/CVBiancadePetris.pdf" download className="download-cv-btn">Descargar CV</a>
      </section>

      <section className="support">
        <h2>Apoya mi trabajo</h2>
        <p>Si te gusta mi trabajo y quieres apoyar el desarrollo de más proyectos, considera hacer una donación. ¡Tu apoyo es muy valioso!</p>
        <a href="https://www.paypal.com/donate?hosted_button_id=YOUR_PAYPAL_BUTTON_ID" target="_blank" rel="noopener noreferrer" className="donate-btn">Donar</a>
      </section>
    </div>
  );
};

export default AboutPage;