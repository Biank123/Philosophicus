import React from 'react';
import './AboutPage.css'; 

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-info">
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQHOEcVMcRBW5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727273001421?e=1734566400&v=beta&t=Jp7biCZv8BK7x80s86JRu_tCZNtXNOcSXEemdUHb09o" alt="Bianca" className="profile-photo" />
        <h1>Sobre Mí</h1>
        <p>Hola, soy Bianca de Petris, una desarrolladora apasionada por la tecnología y el aprendizaje continuo. Aquí puedes conocer un poco más sobre mí, mi experiencia y cómo puedes apoyar mi trabajo.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/bianca-de-petris/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Biank123" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <a href="/cv/CVBiancadePetris.pdf" download className="download-cv-btn">Descargar CV</a>
      </section>
    </div>
  );
};

export default AboutPage;