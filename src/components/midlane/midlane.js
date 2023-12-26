import React from 'react'
import './midlane.css'

function Midlane() {
  return (
    <>
      <div className='roda-container'>
        <img className='roda' alt='roda de carreta' src='./imgs/roda-carreta-2.png'></img>
        <div>
          <h3 className='description'>
            Existem lugares onde você encontra paz.
          </h3>
          <h3 className='description'>
          Descubra um refúgio onde a serenidade 
          </h3>
          <h3 className='description'>
          se torna parte de cada experiência. 
          </h3>
        </div>
        <div className='sinopse-container'>
          <h1 className='title'>
            Criamos memórias
          </h1>
          <h1 className='title'>
            em meio á natureza.
          </h1>
        </div>
      </div>
    </>
  )


}

export default Midlane;