import React from 'react';
import './cardapio.css'
import HTMLFlipBook from 'react-pageflip';
import Header from '../../header/header'
import cardapio from '../../../assets/imgs/cardápio/cardapio-rancho.png'
import pag2 from '../../../assets/imgs/cardápio/pag-2.png'
import pag3 from '../../../assets/imgs/cardápio/pag-3.png'


function Cardapio() {
    return(
        <>
        <Header />
        <div className='cardapio-container'>
            <div className='book'>
                <HTMLFlipBook className='pages' width={495} height={700}>
                    <div className="page">
                        <img id='inicial' src={cardapio} alt="Menu Page 1" />
                    </div>
                    <div className="page">
                        <img id='pag2' src={pag2} alt="Menu Page 2" />
                    </div>
                    <div className="page">
                        <img id='pag3' src={pag3} alt="Menu Page 3" />
                    </div>
                </HTMLFlipBook>
            </div>
        </div>
        </>
    )
}

export default Cardapio;