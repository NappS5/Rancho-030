import React from 'react'
import './header.css'
import '../responsive/responsive.css'
import SocialMedia from '../socialmedia/socialmedia'


function Header() {
    return (
        <>
     <header>
        <nav>
            <ul className='header-container'>
                <a href='./index.html'>
                    <img id='logo' src="./imgs/logo-ranchozero30.png" alt='logo-rz'></img>
                </a>
                <div className='init'>
                <a href='./index.html' className='inicio'>
                    <li>Início</li>
                </a>
                <a href='./index.html' className='sobre'>
                    <li>Sobre</li>
                </a>
                </div>
            </ul>
        </nav>
            <SocialMedia />
     </header>
        </>
    )
}

export default Header