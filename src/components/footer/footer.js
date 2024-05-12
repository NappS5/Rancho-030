import React from 'react'
import './footer.css'
import SocialMedia from '../socialmedia/socialmedia'

function Footer(){
    return(
        <footer id='final'>
            <div className='footer-content'>
        <div id='footer_copyright'>
            ©
            2023 Desenvolvido por <a id='linkedin' href='https://www.linkedin.com/in/felipe-dhein-4a89bb252/' target='blank'>Felipe Sander Dhein</a>
        </div>
            </div>
        </footer>
    )
}
export default Footer