import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="wrapper">
      <h1>Secciones de la página</h1>
      <div className="cols">
        {[
          { id: 1, title: 'Comienza a Escribir', imageUrl: 'https://unsplash.it/500/500/', link: '/select-problem' },
          { id: 2, title: 'Ensayos Publicados', imageUrl: 'https://unsplash.it/511/511/', link: '/essays/published' },
          { id: 3, title: 'Problemas Filosóficos', imageUrl: 'https://unsplash.it/502/502/', link: '/filosofia' },
          { id: 4, title: 'Links relevantes', imageUrl: 'https://unsplash.it/503/503/', link: '/directory' },
          { id: 5, title: 'Foro', imageUrl: 'https://unsplash.it/504/504/', link: '/forum' },
          { id: 6, title: 'Sobre mí', imageUrl: 'https://unsplash.it/505/505/', link: '/about' },
        ].map(card => (
          <Link key={card.id} to={card.link} className="col">
          <div key={card.id} >
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${card.imageUrl})` }}>
                <div className="inner">
                  <p>{card.title}</p>
                </div>
              </div>
              <div className="back">
                <div>
                  <p>Explorar más</p>
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;