import React from 'react';
import '../square/square.css'
function Square () {
    return (
        <div className='square-container'>
            <div className='squares'>
            <div className='square'>
                    <a href='./pagina1.html'>
                        <img alt='placa linha' src='./imgs/placa-linha.JPG'></img>
                    </a>
                </div>
                <div className='square'>
                    <a href='./pagina2.html'>
                    <img alt='Localização' src='./imgs/externa-dia.JPG'></img>
                    </a>
                </div>
                <div className='square'>
                    <a href='./pagina3.html'>
                    <img alt='externaa' src='./imgs/sofa-externa.JPG'></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Square;