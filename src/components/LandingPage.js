import {BiChevronDownCircle} from 'react-icons/bi';

import '../styles/LandingPage.css';

import landinggif from '../assets/landinggif.gif';

const LandingPage = () => {
  return (
    <section className='landing'>
        <img className='landing-page' src={landinggif} alt='landingpage'/>
        <div className='landing-intro'>
            <h2 className='landing-heading'>
                Let Make Things Possible in Efficient Way.
            </h2>
            <div>
                <h4 className='about-me'>
                    &lt;
                    <span className='landing-span about-me'>
                        AboutMe
                    </span>
                    &gt;
                </h4>
                <p className='landing-txt'>My name is Mark Benson B. Hernando. I recently graduated as a <span className='landing-span'>Computer Engineering</span>.<br/>I am an aspiring Fullstack Web Developer especially <span className='landing-span'>MERN Stack</span>. I am seeking for knowledge<br/>all the things that peeks my interest but for know I want to focus on my web development career.</p>
                <h4 className='about-me'>
                    &lt;/
                    <span className='landing-span about-me'>
                        AboutMe
                    </span>
                    &gt;
                </h4>
            </div>
            <button className='learn-more'>
                Learn More About Me
            </button>
        </div>
        <a href='#skills'>
            <BiChevronDownCircle className='landing-down' size={50}/>
        </a>
    </section>
  )
}

export default LandingPage;