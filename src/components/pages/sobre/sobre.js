import React from 'react';
import Header from '../../header/header';
import './sobre.css';
import ranchoEfino from '../../../assets/imgs/RANCHO-FINO CONFEITO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'




function Sobre() {
    return(
        <>
            <Header />
        <div className='about-container'>
            <div className='about-content'>
                <img id='rancho-fino' src={ ranchoEfino } alt='rancho-e-fino'></img>
                <h1>Mas afinal, qual é a diferença entre o Rancho030 e a Fino Confeito?</h1>
                <p>É o que muitas pessoas perguntam à nós.</p>
            </div>

            <div className='Fino-e-Rancho'>
                <div className='about-description'>
                    <h1>Fino Confeito</h1>
                    <p>•É quem faz os doces</p>
                    <p>•Uma marca que visa proporcionar doces e tortas maravilhosas</p>
                </div>
                <div className='about-description'>
                    <h1>Rancho030</h1>
                    <p>•É quem bota os doces para vender</p>
                    <p>•Um espaço que visa proporcionar um ambiente inesquecível para quem o visita.</p>
            </div>
            </div>

            <div className='feedback-container'>
                <div className='feedback-content'>
                    <h1>O que nossos clientes falam sobre nós</h1>

                    <div className='feedbacks'>
                        <h2>Cláudia Santos</h2> 
                        <FontAwesomeIcon icon={faStar} />
                        <p>Amei o lugar, eles prestam ótimo atendimento.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Sobre