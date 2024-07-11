import React from 'react';
import Banner from '../components/banner/Banner';
import Header from '../components/header/Header';
import Gallery from '../components/gallery/Gallery';

function Home() {
    return (
        <>
        <main>
            <Banner />
            <Header />
            <section className='portfolio'>
                <h2 className='portfolio__title'>PORTFOLIO</h2>
                <Gallery />
            </section>
        </main>
        </>
    )
}

export default Home;