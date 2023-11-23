import React from 'react'
import './header.css'

function Header() {
    return (
        <>
        <div>
            <img className='logo' src='./imgs/logo-rancho.png' alt='logo'></img>
        </div>
     <header>
        <nav>
            <ul className='header-list'>
                <a href='./index.html'>
                    <li>Home</li>
                </a>
                <a href='./fotos.html'>
                    <li>Fotos</li>
                </a>
            </ul>
        </nav>
       
     </header>
        </>
    )
}

export default Header