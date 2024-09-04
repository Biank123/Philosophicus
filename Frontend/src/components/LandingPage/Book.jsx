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
                <h6>
                  POR{" "}
                  <a
                    href="https://www.poetryfoundation.org/poets/walt-whitman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bianca de Petris
                  </a>
                </h6>
                   
                <p>Philosophicus es una plataforma diseñada para estudiantes que desean mejorar sus habilidades de escritura a través de la creación de ensayos.</p> <br/>
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
                <h3><strong>A Glimpse</strong></h3>
                <h6>
                  BY{" "}
                  <a
                    href="https://www.poetryfoundation.org/poets/walt-whitman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WALT WHITMAN
                  </a>
                </h6>
                <p>A glimpse through an interstice caught,</p>
                <p>
                  Of a crowd of workmen and drivers in a bar-room around the
                  stove late of a winter night, and I unremark’d seated in a
                  corner,
                </p>
                <p>Of a youth who loves me and whom I love, silently approaching and seating himself near, that he may hold me by the hand,</p>
                <p>A long while amid the noises of coming and going, of drinking and oath and smutty jest,</p>
                <p>There we two, content, happy in being together, speaking little, perhaps not a word.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProject;
