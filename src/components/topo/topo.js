import React from 'react'
import './topo.css'
import banner from '../../assets/imgs/externa-dia.JPG'

function Topo() {
    return (
        <div className='banner-container'>
            <img className='banner' alt='banner-rancho' src={ banner }></img>
        </div>
    )
}

export default Topo;