import React from 'react';
import './espaco.css'
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Espaco() {
    return(
        <>
        <Header />
        <div className='espaco-container'>
            <div className='espaco-content'>
                <h1>O Rancho tem um</h1>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Espaco;