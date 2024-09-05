import React from 'react';
import './Landing.css'; // Asegúrate de que este archivo tenga los estilos necesarios
import BookProject from './Book';

import Cards from './Cards';
import Footer from './Footer';

const Landing = () => {

    return (
        <div>
            <main>
                <header>
                 
                </header>
                <section>
                <BookProject />
                </section>
                <Cards />
                <Footer />
            </main>
        </div>
    );
};


export default Landing;