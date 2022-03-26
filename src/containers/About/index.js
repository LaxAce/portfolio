import './index.css';
import { useState } from 'react';
import {BsCaretRight} from 'react-icons/bs';

// Asset
import myImage from '../../assets/multicolor.png'

// Component
import Header from '../../components/Header';


const About = ({aos}) => {
    const stack = ['JavaScript  (ES6+)', 'React', 'CSS', 'Redux', 'Node.js', 'MongoDB']
    const [imgHover, setImgHover] = useState(false);

    const displayStackList = () => {
       return stack.map((each, i) => (
            <div className='stack-list' key={i}>
                <span><BsCaretRight/></span>
                <p>{each}</p>
            </div>
        ))
    }
    
    return ( 
        <section data-aos={aos} className="about-section" id='about'>
            <Header label={'01.'} title={'About Me'} />
            <div  className="about-body">
                <div className="about-content">
                    <p>Hello! my name is Abdulhafeez and i have fun coding. From the moment I wrote my first line of code, I Knew I was hooked into the world of software development.
                    </p>
                    <p>But software development has never been ''just a job'' for me, it's offered an engaging challenge, which leads to constant learning and improvement to create high-quality software. What started with a simple line of code has become a full-fledged passion that only gets more exciting as time goes by.
                    </p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <div className="my-stack">
                        {displayStackList()}
                    </div>
                </div>
               <div 
                    className="wrapper" 
                    onMouseOver={() => setImgHover(true)}
                    onMouseLeave={() => setImgHover(false)}
                    >
                    <div className="my-image-container">
                        <div className={`shade ${imgHover && 'hidden'}`}></div>
                        <img src={myImage} alt='Abdulhafeez' className="my-image"  />
                        <div className={`frame ${imgHover && 'resize'}`}></div>
                    </div>
               </div>
            </div>

        </section>
     );
}
 
export default About;