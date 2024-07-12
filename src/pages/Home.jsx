import React from 'react';
import Banner from '../components/banner/Banner';
import Header from '../components/header/Header';
import Gallery from '../components/gallery/Gallery';

function Home() {
    return (
        <>
        <main>
            <Banner />
            <div className='page1'>
            <Header />
                <section className='portfolio'>
                    <h2 className='portfolio__title'>PORTFOLIO</h2>
                    <Gallery />
                </section>
            </div>
        </main>
        </>
    )
}

export default Home;