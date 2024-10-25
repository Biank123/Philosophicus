import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="wrapper">
      <h1><em>Secciones de la página</em></h1>
      <div className="cols">
        {[
          { id: 1, title: 'Comienza a Escribir', imageUrl: 'https://unsplash.it/500/500/', link: '/select-problem', text: 'Enfócate'},
          { id: 2, title: 'Ensayos Publicados', imageUrl: 'https://unsplash.it/511/511/', link: '/essays/published', text: 'Examina' },
          { id: 3, title: 'Problemas Filosóficos', imageUrl: 'https://unsplash.it/502/502/', link: '/filosofia', text: 'Sumérgete' },
          { id: 4, title: 'Links Relevantes', imageUrl: 'https://unsplash.it/503/503/', link: '/directory', text: 'Indaga' },
          { id: 5, title: 'Foro de la Comunidad', imageUrl: 'https://unsplash.it/504/504/', link: '/forum', text: 'Conecta' },
          { id: 6, title: 'Sobre Philosophicus', imageUrl: 'https://unsplash.it/505/505/', link: '/about', text: 'Conoce' },
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
                  <p>{card.text}</p>
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