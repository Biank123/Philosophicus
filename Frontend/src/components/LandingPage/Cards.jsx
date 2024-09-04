import React from 'react'
import './Cards.css';

const Cards = () => {
  return (
    <div className="wrapper">
      <h1>Secciones de la página</h1>
      <div className="cols">
        {[
          { id: 1, title: 'Comienza a Escribir', imageUrl: 'https://unsplash.it/500/500/' },
          { id: 2, title: 'Publicados', imageUrl: 'https://unsplash.it/511/511/' },
          { id: 3, title: 'Aprender', imageUrl: 'https://unsplash.it/502/502/' },
          { id: 4, title: 'Jugar', imageUrl: 'https://unsplash.it/503/503/' },
          { id: 5, title: 'Foro', imageUrl: 'https://unsplash.it/504/504/' },
          { id: 6, title: 'Quiénes Somos', imageUrl: 'https://unsplash.it/505/505/' },
        ].map(card => (
          <div key={card.id} className="col" onTouchStart={(e) => e.currentTarget.classList.toggle('hover')}>
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${card.imageUrl})` }}>
                <div className="inner">
                  <p>{card.title}</p>
                  <span></span>
                </div>
              </div>
              <div className="back">
                <div>
                  <p>lorem</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards