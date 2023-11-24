import './index.css';
import { useState } from 'react';
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, } from 'react-icons/fi';


// Components
import Navbar from '../../components/Navbar';
import Typist from 'react-typist';

const Hero = ({ aos }) => {
    const [isDone, setIsDone] = useState(false);

    return (
        <div className="hero">
            <Navbar />
            <div data-aos={aos} className="hero-body container">
                <div className="body-wrapper">
                    <Typist onTypingDone={() => setIsDone(true)}>
                        <h4>Hi, my name is</h4>
                        <h1>Abdulhafeez Hameed.</h1>
                        <h2>I build things for the web.</h2>
                    </Typist>
                    {isDone ? (
                        <>
                            <p>I'm a software developer specialized in building exceptional digital solutions. Currently, I'm focused on building interactive experiences and human-centered product at <a href='https://www.samedaycustom.com/' target='_blank' className='animated-link'>SameDayCustom</a>.
                            </p>
                            <a href='mailto:laxhameedhafeez@gmail.com' target='_blank' className='btn btn-hero'>Get in touch</a>
                        </>
                    ) : null}
                </div>
            </div>
            <div className="sticky-bottom">
                <div className="sticky-left">
                    <div className="social-icons">
                        <a href="https://github.com/LaxAce" target='_blank'><FiGithub className='horizontal-icon' /></a>
                        <a href='https://www.instagram.com/lax_ace/' target='_blank'><FiInstagram className='horizontal-icon' /></a>
                        <a href='https://twitter.com/Lax_hood' target='_blank'><FiTwitter className='horizontal-icon' /></a>
                        <a href='https://www.linkedin.com/in/abdulhafeez-hameed-606445219/' target='_blank'><FiLinkedin className='horizontal-icon' /></a>
                    </div>
                    <span className='left-line'></span>
                </div>

                <div className="sticky-right">
                    <div className="my-mail"><a href='mailto:laxhameedhafeez@gmail.com' target='_blank'>laxhameedhafeez@gmail.com</a></div>
                    <span className='right-line'></span>
                </div>
            </div>
        </div>
    );
}

export default Hero;
