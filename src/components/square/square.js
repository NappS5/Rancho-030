import React from 'react';
import '../square/square.css';
import localizacao from '../../assets/imgs/placa-linha.JPG';
import espaco from '../../assets/imgs/externa-dia.JPG';
import cardapio from '../../assets/imgs/cardapio-rancho.png'


function Square () {
    return (
        <div className='square-container'>
            <div className='squares'>
            <div className='square'>
                    <a href='./pagina1.html'>
                        <img alt='localizacao' src={ localizacao }></img>
                    </a>
                </div>
                <div className='square'>
                    <a href='./pagina2.html'>
                    <img alt='espaco' src={ espaco }></img>
                    </a>
                </div>
                <div className='square'>
                    <a href='./pagina3.html'>
                    <img alt='cardapio' src={ cardapio }></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Square;