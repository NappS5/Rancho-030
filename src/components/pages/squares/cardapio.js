import React from 'react';
import './cardapio.css';
import HTMLFlipBook from 'react-pageflip';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import cardapio from '../../../assets/imgs/cardápio/cardapio-rancho.png';
import pag2 from '../../../assets/imgs/cardápio/pag-2.png';
import pag3 from '../../../assets/imgs/cardápio/pag-3.png';


function Cardapio() {
    return(
        <>
        <Header />
        <div className='cardapio-container'>
            <h1 id='title-cardapio-rancho'>Cardápio do Rancho030</h1>
            <div className='book'>
                <HTMLFlipBook 
                className='pages' 
                width={495} 
                height={700} 
                showCover={true}
                size="stretch"
                minWidth={495}
                maxWidth={495}
                minHeight={700}
                maxHeight={700}
                maxShadowOpacity={0.5}
                mobileScrollSupport={true}
                >
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
        <Footer />
        </>
    )
}

export default Cardapio;