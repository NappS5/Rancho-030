import React from 'react'
import './footer.css'
import SocialMedia from '../socialmedia/socialmedia'

function Footer(){
    return(
        <footer id='final'>
            <div className='footer-content'>
            <SocialMedia />
        <div id='footer_copyright'>
            ©
            2023 Desenvolvido por Felipe Sander
        </div>
            </div>
        </footer>
    )
}
export default Footer