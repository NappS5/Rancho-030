import React from 'react'
import './header.css'
import '../responsive/responsive.css'
import logo from '../../assets/imgs/logo-ranchozero30.png'
import roda from '../../assets/imgs/roda-carreta-virada.png'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
     <header>
        <nav>
            <ul className='header-container'>
                <Link to='/'>
                    <img id='logo' src= { logo } alt='logo-rz'></img>
                </Link>

                <div className='init'>
                <Link to='/'>
                    <li id='Home'>Início</li>
                </Link>

                <Link to='/sobre'>
                    <li id='about'>Sobre</li>
                </Link>

                <Link to='/contato'>
                    <li id='contact'>Contato</li>
                </Link>
                </div>
            </ul>
        </nav>
                <img id='carreta' src= { roda } alt='roda-carreta'></img>
     </header>
        </>
    )
}

export default Header