import React from 'react';
import './sobre.css';
import video from '../../../assets/videos/video-teste.mp4'





function Sobre() {
    return(
        <>
            {/* <Header /> */}
            <div className='trailer-container'>
                <div className='trailer-content'>
                    {/* <img alt='titulo-rancho' id='titulo-rancho' src={ranchoEfino}></img> */}
                    <video controls className='video-promocional' typeof='video/mp4' src={video}></video>
                    {/* <p id='previa'>Aqui contamos um pouco mais sobre o que é a Fino Confeito e o Rancho030 e como um é tão importante para que o outro exista... Basicamente, eles se complementam de uma forma perfeita, enquanto um carrega a perfeição em cada detalhe, o outro leva a simplicidade consigo, assim como os proprietários Angela e Clóvis.</p> */}
                </div>
            </div>
            {/* <Footer /> */}
        </> 
    )
}

export default Sobre