import React from 'react';
import Header from '../../header/header';
import './sobre.css';
import ranchoEfino from '../../../assets/imgs/RANCHO-FINO CONFEITO.png';
import video from '../../../assets/videos/video-teste.mp4'
import rodaCarreta from '../../../assets/imgs/roda-carreta.png'
import rodaInvertida from '../../../assets/imgs/roda-carreta-virada.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'




function Sobre() {
    return(
        <>
            <Header />
            <div className='video-container'>
                <img alt='roda' id='roda-invertida' src={rodaInvertida}></img>
                <video controls className='video-promocional' typeof='video/mp4' src={video}></video>
                <img alt='roda' id='roda-carreta' src={rodaCarreta}></img>
            </div>
        <div className='about-container'>
            <div className='about-content'>
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
        </div>
        </>
    )
}

export default Sobre