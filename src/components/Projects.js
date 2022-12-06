import { useState } from 'react';

import '../styles/Projects.css';

import wstatic from '../assets/webstatic.png';
import tway from '../assets/threeway.png';
import ddate from '../assets/duedate.png';
import construction from '../assets/underconstruction.jpg';
import jdemand from '../assets/jdemand.png';
import rweb from '../assets/rweb.png';

const Projects = () => {
  const [webStatic, setWebStatic] = useState(false);
  const [threeWay, setThreeWay] = useState(true);
  const [dueDate, setDueDate] = useState(true);
  const [chronoBreak, setChronoBreak] = useState(true);
  const [juanDemand, setJuanDemand] = useState(true);
  const [reactWeb, setReactWeb] = useState(true);

  // Handler
  const onWebStaticHandler = () => {
    if (webStatic) {
      setWebStatic(false);
      setThreeWay(true);
      setDueDate(true);
      setChronoBreak(true);
      setJuanDemand(true);
      setReactWeb(true);
    }
    else {
      setThreeWay(true);
      setDueDate(true);
      setChronoBreak(true);
      setJuanDemand(true);
      setReactWeb(true);
    }
  };
  const onThreeWayHandler = () => {
    if (threeWay) {
      setWebStatic(true);
      setThreeWay(false);
      setDueDate(true);
      setChronoBreak(true);
      setJuanDemand(true);
      setReactWeb(true);
    }
    else {
      setWebStatic(true);
      setDueDate(true);
      setChronoBreak(true);
      setJuanDemand(true);
      setReactWeb(true);
    }
  };
  const onDueDateHandler = () => {
    if (dueDate) {
      setWebStatic(true);
      setThreeWay(true);
      setDueDate(false);
      setChronoBreak(true);
      setJuanDemand(true);
      setReactWeb(true);
    }
    else {
      setWebStatic(true);
      setThreeWay(true);
      setChronoBreak(true);
      setJuanDemand(true);
      setReactWeb(true);
    }
  };
  const onChronoBreakHandler = () => {
    if (chronoBreak) {
      setWebStatic(true);
      setThreeWay(true);
      setDueDate(true);
      setChronoBreak(false);
      setJuanDemand(true);
      setReactWeb(true);
    }
    else {
      setWebStatic(true);
      setThreeWay(true);
      setDueDate(true);
      setJuanDemand(true);
      setReactWeb(true);
    }

  };
  const onJuanDemandHandler = () => {
    if (juanDemand) {
      setWebStatic(true);
      setThreeWay(true);
      setDueDate(true);
      setChronoBreak(true);
      setJuanDemand(false);
      setReactWeb(true);
    }
    else {
      setWebStatic(true);
      setThreeWay(true);
      setDueDate(true);
      setChronoBreak(true);
      setReactWeb(true);
    }
  }
  const onReactWebHandler = () => {
    if (reactWeb) {
      setWebStatic(true);
      setThreeWay(true);
      setDueDate(true);
      setChronoBreak(true);
      setReactWeb(false);
      setJuanDemand(true);
    }
    else {
      setWebStatic(true);
      setThreeWay(true);
      setDueDate(true);
      setChronoBreak(true);
      setJuanDemand(true);
    }
  };

  return (
    <section className='projects'>
      <h4 className='projects-tag'>
        &lt;
        <span className='projects-span'>
          Projects
        </span>
        &gt;
      </h4>
      <div className='projects-container'>
        <div className='projects-buttons'>
          <button
            className={(!webStatic) ? 'projects-button-active' : 'projects-button'}
            onClick={onWebStaticHandler}>
            Static Web Portfolio
          </button>
          <button
            className={(!threeWay) ? 'projects-button-active' : 'projects-button'}
            onClick={onThreeWayHandler}>
            Three-Way Element
          </button>
          <button
            className={(!dueDate) ? 'projects-button-active' : 'projects-button'}
            onClick={onDueDateHandler}>
            Due Date Wise
          </button>
          <button
            className={(!chronoBreak) ? 'projects-button-active' : 'projects-button'}
            onClick={onChronoBreakHandler}>
            ChronoBreak
          </button>
          <button
            className={(!juanDemand) ? 'projects-button-active' : 'projects-button'}
            onClick={onJuanDemandHandler}>
            JuanDemand
          </button>
          <button
            className={(!reactWeb) ? 'projects-button-active' : 'projects-button'}
            onClick={onReactWebHandler}>
            React Web Portfolio
          </button>
        </div>
        {(!webStatic) ?
          <div className='projects-previews'>
            <img className='projects-img' src={wstatic} alt='webstatic' />
          </div> : (!threeWay) ?
            <div className='projects-previews'>
              <img className='projects-img' src={tway} alt='threeway' />
            </div> : (!dueDate) ?
              <div className='projects-previews'>
                <img className='projects-img' src={ddate} alt='duedate' />
              </div> : (!chronoBreak) ?
                <div className='projects-previews'>
                  <img className='projects-img' src={construction} alt='chronobreak' />
                </div> : (!juanDemand) ?
                  <div className='projects-previews'>
                    <img className='projects-img' src={jdemand} alt='jdemand' />
                  </div> : (!reactWeb) ?
                    <div className='projects-previews'>
                      <img className='projects-img' src={rweb} alt='reactweb' />
                    </div> : <></>}
        {(!webStatic) ?
          <div className='projects-descriptions'>
            <h4>Tech Stack:</h4>
            <p>HTML & CSS</p>
            <p className='projects-empty'>
              This is the first website that I created using HTML and CSS.
            </p>
          </div> : (!threeWay) ?
            <div className='projects-descriptions'>
              <h4>Tech Stack:</h4>
              <p>HTML, CSS, & JavaScript</p>
              <p>
                This Game is called Three-Way Element it is a Rock, Paper, or Scissors with more visually appealing. It is my most favorite App that I did. The first time that I use JavaScript to make a website dynamic.
              </p>
            </div> : (!dueDate) ?
              <div className='projects-descriptions'>
                <h4>Tech Stack:</h4>
                <p>MERN Stack with Redux</p>
                <p>
                  Due Date Wise helps you keep track of you bills and will be reminded by email (on progress). This is have a CRUD functionality.
                </p>
              </div> : (!chronoBreak) ?
                <div className='projects-descriptions'>
                  <h4>Tech Stack:</h4>
                  <p>MERN Stack with Redux</p>
                  <p>
                    ChronoBreak is a Sport Facility Booking App where you can book any facilities that you desire at that Facility Center. (On progress.)
                  </p>
                </div> : (!juanDemand) ?
                  <div className='projects-descriptions'>
                    <h4>Tech Stack:</h4>
                    <p>MERN Stack with Redux</p>
                    <p>
                      JuanDemand is a Job site that will accommodate all blue collar skilled workers. In this app, job hunter and employer can register and send or accept offers it is like a linkedin focus on blue collar skilled workers.
                    </p>
                  </div> : (!reactWeb) ?
                    <div className='projects-descriptions'>
                      <h4>Tech Stack:</h4>
                      <p>React</p>
                      <p className='projects-empty'>
                        An updated web portfolio using React.
                      </p>
                    </div> : <></>}
      </div>

      <h4 className='projects-tag'>
        &lt;/
        <span className='projects-span'>
          Projects
        </span>
        &gt;
      </h4>
    </section>
  )
}

export default Projects;