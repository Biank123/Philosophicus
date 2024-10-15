import React from 'react';
import './AboutPage.css'; 

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Sección sobre mí */}
      <section className="about-info">
    <img src="https://media.licdn.com/dms/image/v2/D4E03AQHOEcVMcRBW5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727273001421?e=1734566400&v=beta&t=Jp7biCZv8BK7x80s86JRu_tCZNtXNOcSXEemdUHb09o" alt="Bianca" className="profile-photo" />
    <h1>Sobre Mí</h1>
    <p>Hola, soy Bianca de Petris, una desarrolladora apasionada por la tecnología y el aprendizaje continuo. Como profesora de filosofía, he aprendido a valorar la curiosidad y la crítica constructiva, habilidades que aplico en mi trabajo diario en desarrollo web.</p>
    <p>Mi interés por la filosofía y la tecnología me llevó a crear este espacio, donde busco unir ambas disciplinas. Estoy comprometida con construir soluciones tecnológicas accesibles y de calidad, siempre enfocándome en cómo estas pueden mejorar nuestra comprensión del mundo.</p>
    <p>A través de mi página, comparto reflexiones sobre temas filosóficos y tecnológicos, así como recursos que pueden ayudar a otros en su viaje de aprendizaje. Espero que este sitio se convierta en un lugar de encuentro para aquellos que desean explorar, aprender y compartir ideas.</p>
    <div className="social-links">
        <a href="https://www.linkedin.com/in/bianca-de-petris/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Biank123" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    <a href="/cv/CVBiancadePetris.pdf" download className="download-cv-btn">Descargar CV</a>
</section>

      {/* Sección de visión */}
      <section className="mission-vision">
    <h2>Visión</h2>
    <p>Mi visión es crear un espacio dinámico donde la filosofía y la tecnología se entrelazan, fomentando una comunidad de aprendizaje y reflexión. Aspiro a inspirar a otros a cuestionar, explorar y comprender el impacto de la tecnología en nuestra sociedad, promoviendo un enfoque crítico y ético en el desarrollo tecnológico.</p>
</section>

      {/* Sección adicional */}
      <section className="additional-info">
    <h2>Propósito de la Página</h2>
    <p>Como profesora de filosofía, siempre he creído en la importancia de compartir ideas y fomentar el diálogo. Mi pasión por la filosofía y la tecnología me llevó a crear este espacio donde puedo combinar ambos mundos. Este proyecto es una oportunidad para practicar y mejorar mis habilidades en desarrollo backend mientras ofrezco un recurso valioso para quienes también están interesados en la filosofía.</p>
    <p>A través de esta página, busco inspirar a otros a explorar conceptos filosóficos y reflexionar sobre cómo la tecnología puede influir en nuestra comprensión del mundo. Estoy convencida de que compartir conocimientos enriquece nuestras vidas y ayuda a construir una comunidad más conectada y consciente.</p>
</section>
    </div>
  );
};

export default AboutPage;