import React from 'react'
import './topo.css'
import banner from '../../assets/imgs/externa-dia.JPG'
import imgTopo from '../../assets/imgs/topo-img.png'

function Topo() {
    return (
        <div className='banner-container'>
            <img className='banner' alt='banner-rancho' src={ imgTopo }></img>
        </div>
    )
}

export default Topo;