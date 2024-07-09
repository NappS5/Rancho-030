import React from 'react';
import '../square/square.css';
import localizacao from '../../assets/imgs/localizacao.png';
import espaco from '../../assets/imgs/espaco.png';
import cardapio from '../../assets/imgs/cardápio/cardapio-rancho.png'


function Square () {
    return (
        <>
        <div className='square-container'>
            <div className='squares'>
            <div className='square'>
                    <a href='./local'>
                        <img alt='localizacao' src={ localizacao }></img>
                    </a>
                </div>
                <div className='square'>
                    <a href='./espaco'>
                    <img alt='espaco' src={ espaco }></img>
                    </a>
                </div>
                <div className='square'>
                    <a href='./cardapio'>
                    <img alt='cardapio' src={ cardapio }></img>
                    </a>
                </div>
            </div>
            <p className='frase-chama'>O melhor local para respirar ar puro na Serra Gaúcha e fugir da rotina.</p>
        </div>
        </>
    )
}

export default Square;