import React from "react";
import './Book.css';

const BookProject = () => {


  return (
    <div className="scene">
      <div className="book-wrap">
        <div className="left-side">
          <div className="book-cover-left"></div>
          <div className="layer1">
            <div className="page-left"></div>
          </div>
          <div className="layer2">
            <div className="page-left"></div>
          </div>
          <div className="layer3">
            <div className="page-left"></div>
          </div>
          <div className="layer4">
            <div className="page-left"></div>
          </div>
          <div className="layer-text">
            <div className="page-left-2">
              <div className="corner"></div>
              <div className="corner2"></div>
              <div className="corner-fold"></div>
              <div className="page-text w-richtext">
                <h3><strong>¿Por qué Philosophicus?</strong></h3>
          
                <p>Philosophicus es una plataforma diseñada para estudiantes que desean mejorar sus habilidades de escritura a través de la creación de ensayos.</p> <br />
                <p>La página te guía paso a paso en el proceso de escribir un ensayo,
                  ofreciendo una estructura clara y herramientas útiles para desarrollar y organizar tus ideas,
                  facilitando así la redacción de textos bien fundamentados y coherentes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="center"></div>
        <div className="right-side">
          <div className="book-cover-right"></div>
          <div className="layer1">
            <div className="page-right"></div>
          </div>
          <div className="layer2 right">
            <div className="page-right"></div>
          </div>
          <div className="layer3 right">
            <div className="page-right"></div>
          </div>
          <div className="layer4 right">
            <div className="page-right"></div>
          </div>
          <div className="layer-text right">
            <div className="page-right-2">
              <div className="page-text w-richtext">
                <h3><strong>La importancia de la filosofía</strong></h3>
                <p>
                  La filosofía nos invita a cuestionar nuestras creencias, examinar el mundo con una mirada crítica y reflexiva, y buscar respuestas a las preguntas fundamentales sobre la existencia, la moralidad y la naturaleza del conocimiento.
                </p>
                <br />
                <p>
                  En Philosophicus, te adentrarás en este vasto mundo de ideas, desarrollando no solo habilidades de escritura, sino también el pensamiento crítico y la capacidad de argumentación sólida, que son esenciales para cualquier disciplina académica y la vida diaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProject;
