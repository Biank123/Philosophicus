import React from 'react';
import BookProject from './Book';
import './Landing.css';
import Cards from './Cards';
import Footer from './Footer';

const Landing = () => {

    return (
        <div className='body-landing'>
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