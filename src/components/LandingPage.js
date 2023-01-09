import {BiChevronDownCircle} from 'react-icons/bi';

import '../styles/LandingPage.css';

import landinggif from '../assets/landinggif.gif';
import resume from '../assets/MarkBensonB.HernandoFullStackDevMERN2022.pdf';

const LandingPage = () => {
  return (
    <section id='landing' className='landing'>
        <img className='landing-page' src={landinggif} alt='landingpage'/>
        <div className='landing-intro'>
            <h2 className='landing-heading'>
                Let's Make Things Possible in Efficient Way.
            </h2>
            <div className='about-me-container'>
                <h4 className='about-me'>
                    &lt;
                    <span className='about-me-inner'>
                        AboutMe
                    </span>
                    &gt;
                </h4>
                <p className='landing-txt'>My name is Mark Benson B. Hernando. I recently graduated as a <span className='landing-span'>Computer Engineering</span>. <br className='none'/>I am a Fullstack Web Developer especially <span className='landing-span'>MERN Stack</span>. I am seeking for knowledge all the <br className='none'/>things that peeks my interest but for now I want to focus on my web development career.</p>
                <h4 className='about-me'>
                    &lt;/
                    <span className='about-me-inner'>
                        AboutMe
                    </span>
                    &gt;
                </h4>
            </div>
            <a href={resume} download>
            <button className='learn-more'>
                Download CV
            </button>
            </a>
        </div>
        <a href='#skills'>
            <BiChevronDownCircle className='landing-down' size={50}/>
        </a>
    </section>
  )
}

export default LandingPage;
