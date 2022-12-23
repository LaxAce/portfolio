import './index.css';
import {FiGithub, FiInstagram, FiTwitter, FiLinkedin, } from 'react-icons/fi'

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="social-icons">
                <a href="https://github.com/LaxAce" target='_blank'><FiGithub size={21} className='small-icon' /></a>
                <a href='https://www.instagram.com/lax_ace/' target='_blank'><FiInstagram size={21} className='small-icon' /></a>
                <a href='https://twitter.com/Lax_hood' target='_blank'><FiTwitter size={21} className='small-icon' /></a>
                <a href='https://www.linkedin.com/in/abdulhafeez-hameed-606445219/' target='_blank'><FiLinkedin size={21}  className='small-icon' /></a>
            </div>
            <p>Design inspired by Brittany Chiang's portfolio. Built by <a href='/' className='animated-link'>Abdulhafeez Hameed.</a></p>
        </footer>
     );
}
 
export default Footer;