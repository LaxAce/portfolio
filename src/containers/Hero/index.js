import './index.css';
import {FiGithub, FiInstagram, FiTwitter, FiLinkedin, } from 'react-icons/fi'

// Components
import Navbar from '../../components/Navbar';

const Hero = () => {

    return ( 
        <div className="hero">
            {/* <Navbar/> */}
            <div className="hero-body">
                <h4>Hi, my name is</h4>
                <h1>Abdulhafeez Hameed.</h1>
                <h2>I build things for the web.</h2>
                <p>I'm a software engineer specialized in building exceptional digital solutions. Currently, I'm focused on building accessible, human-centered products at <a className='animated-link' href="https://newcoretechnologies.netlify.app/">Newcore Technology</a></p>
                <a href='mailto:laxhameedhafeez@gmail.com' className='btn btn-hero'>Get in touch</a>
            </div>
            <div className="sticky-bottom">
                <div className="sticky-left">
                    <div className="social-icons">
                        <a href="https://github.com/LaxAce"><FiGithub className='horizontal-icon'/></a>
                        <a href='https://www.instagram.com/lax_ace/'><FiInstagram className='horizontal-icon'/></a>
                        <a href='https://twitter.com/Lax_hood'><FiTwitter className='horizontal-icon'/></a>
                        <a href='https://www.linkedin.com/in/abdulhafeez-hameed-606445219/'><FiLinkedin className='horizontal-icon' /></a>
                    </div>
                    <span className='left-line'></span>
                </div>
                
                <div className="sticky-right">
                    <div className="my-mail"><a href='mailto:laxhameedhafeez@gmail.com'>laxhameedhafeez@gmail.com</a></div>
                    <span className='right-line'></span>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;