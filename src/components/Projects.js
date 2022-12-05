import { useState } from 'react';

import '../styles/Projects.css';

const Projects = () => {
    const [webStatic, setWebStatic] = useState(false);
    const [threeWay, setThreeWay] = useState(true);
    const [dueDate, setDueDate] = useState(true);
    const [chronoBreak, setChronoBreak] = useState(true);
    const [reactWeb, setReactWeb] = useState(true);

    // Handler
    const onWebStaticHandler = () => {
        if(webStatic) {
          setWebStatic(false);
        }
        else {
            setThreeWay(true);
        }
    };
    const onThreeWayHandler = () => {
        if(threeWay) {
          setWebStatic(true);
        }
        else {
          setThreeWay(false);
        }
    };
    // const onDueDateHandler = () => {
    //     if(dueDate) {
    //         setDueDate(true);
    //         setWebStatic(false);
    //         setThreeWay(false);
    //         setChronoBreak(false);
    //         setReactWeb(false);
    //     }
    // };
    // const onChronoBreakHandler = () => {
    //     if(chronoBreak) {
    //         setChronoBreak(true);
    //         setWebStatic(false);
    //         setThreeWay(false);
    //         setDueDate(false);
    //         setReactWeb(false);
    //     }
    // };
    // const onReactWebHandler = () => {
    //     if(reactWeb) {
    //         setReactWeb(true);
    //         setWebStatic(false);
    //         setThreeWay(false);
    //         setDueDate(false);
    //         setChronoBreak(false);
    //     }
    // };

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
          className={(!webStatic) ? 'projects-button-active' :'projects-button'}
          onChange={onWebStaticHandler}>
            Static Web Portfolio
          </button>
          <button 
          className={(!webStatic) ? 'projects-button-active' :'projects-button'}
          onChange={onThreeWayHandler}>
            Three-Way Element
          </button>
          {/* <button 
          className={(dueDate) ? 'projects-button-active' :'projects-button'}
          onChange={onDueDateHandler}>
            Due Date Wise
          </button>
          <button 
          className={(chronoBreak) ? 'projects-button-active' :'projects-button'}
          onChange={onChronoBreakHandler}>
            ChronoBreak
          </button>
          <button 
          className={(reactWeb) ? 'projects-button-active' :'projects-button'}
          onChange={onReactWebHandler}>
            React Web Portfolio
          </button> */}
        </div>
        <div className='projects-previews'>
        </div>
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