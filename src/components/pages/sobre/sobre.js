import React from 'react';
import Header from '../../header/header';
import './sobre.css';
import ranchoEfino from '../../../assets/imgs/RANCHO-FINO CONFEITO.png';


function Sobre() {
    return(
        <>
            <Header />
        <div className='contact-container'>
            <div className='contact-content'>
                <img id='rancho-fino' src={ ranchoEfino } alt='rancho-e-fino'></img>
                <h1>Mas afinal, qual é a diferença entre o Rancho030 e a Fino Confeito?</h1>
                <p>É o que muitas pessoas perguntam à nós.</p>
            </div>

            <div className='Fino-e-Rancho'>
                <div className='FinoConfeito'>
                    <h1>Fino Confeito</h1>
                    <p>•É quem faz os doces</p>
                    <p>•Uma marca que visa proporcionar doces e tortas maravilhosas</p>
                </div>
                <div className='Rancho030'>
                    <h1>Rancho030</h1>
                    <p>•É quem bota os doces para vender</p>
                    <p>•Um espaço que visa proporcionar um ambiente inesquecível para quem o visita.</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Sobre