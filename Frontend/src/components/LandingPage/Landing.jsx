import React from 'react';
import BookProject from './Book';
import './Landing.css';
import Cards from './Cards';
import Footer from './Footer';

const Landing = () => {

    return (
        <div className='body-landing'>
            <div className="overlay"></div>
            <main>
                <section>
                    <BookProject />
                </section>
                 
                <div>
                    <Cards />
                </div>
                <Footer />
            </main>
        </div>
    );
};


export default Landing;