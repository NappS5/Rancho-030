import React from 'react';
import './maps.css'

function Maps(){
    return(
    <div className='mapa'>
        <iframe 
        title="GoogleMaps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.511094739362!2d-50.89111642435625!3d-29.47228357521676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519318f188a0f95%3A0x7274cf603fb1efc1!2sRancho%20030!5e0!3m2!1spt-BR!2sbr!4v1715555455061!5m2!1spt-BR!2sbr" 
        width="1200px"
        height="400px"
        padding="0"
        margin="0"
        style={{border: 0 }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    )
    
}

export default Maps;