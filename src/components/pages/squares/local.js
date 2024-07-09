import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Maps from '../../maps/maps';
import slogan from '../../../assets/imgs/slogan.svg';
import local from '../../../assets/imgs/placa-linha-2.png';
import rancho from '../../../assets/imgs/rancho-longo.svg';
import './local.css';



function Local() {
    return(
        <>
        <Header />
        <div className='localizacao-container'>
            <div className='localizacao-content'>
            <img id='slogan' alt='localizacao' src={ slogan }></img>
                <div className='rancho-local'>
                    <Maps />
                    <img id='rancho-longo' alt='localizacao' src={ rancho }></img>
                    <img id='local' alt='localizacao' src={ local }></img>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Local;