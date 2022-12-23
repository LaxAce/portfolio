import './index.css';
import { useEffect } from 'react';
import Aos from 'aos';

const Contact = () => {
    useEffect(() => {
        Aos.init({duration: 600})
      }, []);

    return ( 
        <section data-aos='fade-up' className="contact-section" id='contact'>
            <h2>04. What's Next?</h2>
            <h1>Get In Touch</h1>
            <p>You like what you see right? I'm open for job opportunities, and actively interviewing.
                Should you want to hire me, get in touch or just say hi, kindly hit that button below and i will be sure to
                reply you in no time!
            </p>
            <a href='mailto:laxhameedhafeez@gmail.com' target='_blank' className="btn">Get in touch</a>
        </section>
     );
}
 
export default Contact;