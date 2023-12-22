import React from 'react'
import './header.css'

function Header() {
    return (
        <>
     <header>
        <nav>
            <ul className='header-container'>
                <a href='./index.html'>
                    <img id='logo' src="./imgs/logo-ranchozero30.png" alt='logo-rz'></img>
                </a>
                <a href='./index.html' className='inicio'>
                    <li>Início</li>
                </a>
                <a href='./index.html' className='sobre'>
                    <li>Sobre</li>
                </a>
            </ul>
        </nav>

        <div class="social-media">

            <a href="https://www.instagram.com/finoconfeito.gramado/" rel='noreferrer' target="_blank">
                <i class="fa-brands fa-instagram" id="social_media_top"></i> 
            </a>

            <a href="https://contate.me/finoconfeitogramado" rel='noreferrer' target="_blank">
                <i class="fa-brands fa-whatsapp" id="social_media_top"></i>
            </a>

        </div>
       
     </header>
        </>
    )
}

export default Header