import '../styles/Skills.css';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import nodejs from '../assets/nodejs.png';
import express from '../assets/expressjs.svg';
import mongodb from '../assets/mongodb.svg';
import git from '../assets/git.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import arduino from '../assets/arduino.png';
import cpu from '../assets/cpu.png';
import adapt from '../assets/adapt.png';
import idea from '../assets/idea.png';
import united from '../assets/united.png';

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <h4 className='skills-tag'>
        &lt;
        <span className='skills-span'>
          Skills
        </span>
        &gt;
      </h4>
      <div className='skills-prog skills-prog-mar'>
        <div>
          <h4>
            Programming Skills
          </h4>
        </div>
        <div className='skills-prog-inner'>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={html} alt='html' />
            </div>
            <p>HTML</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={css} alt='css' />
            </div>
            <p>CSS</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={javascript} alt='javascript' />
            </div>
            <p>JavaScript</p>
          </div>
          <div >
            <div className='img-container'>
              <img className='skills-img' src={react} alt='react' />
            </div>
            <p>React</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={redux} alt='redux' />
            </div>
            <p>Redux</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={python} alt='python' />
            </div>
            <p>Python</p>
          </div>
        </div>
        <div className='skills-prog-inner'>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={nodejs} alt='nodejs' />
            </div>
            <p>NodeJS</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={express} alt='express' />
            </div>
            <p>Express</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={mongodb} alt='mongodb' />
            </div>
            <p>MongoDB</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={java} alt='java' />
            </div>
            <p>Java</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={git} alt='git' />
            </div>
            <p>Git</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={arduino} alt='arduino' />
            </div>
            <p>Arduino</p>
          </div>
        </div>
      </div>
      <div className='skills-prog'>
        <div>
          <h4>Other Skills</h4>
        </div>
        <div className='skills-prog-inner'>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={cpu} alt='Hardware Troubleshooting' />
            </div>
            <p>Hardware Troubleshooting</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={idea} alt='Problem-Solving' />
            </div>
            <p>Problem-Solving</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={united} alt='Team Work' />
            </div>
            <p>Teamwork</p>
          </div>
          <div>
            <div className='img-container'>
              <img className='skills-img' src={adapt} alt='Adaptability' />
            </div>
            <p>Adaptability</p>
          </div>
        </div>
      </div>
      <h4 className='skills-tag'>
        &lt;/
        <span className='skills-span'>
          Skills
        </span>
        &gt;
      </h4>
    </section>
  )
}

export default Skills;