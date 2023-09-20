import React from 'react';
import './Intro.scss';
import Skills from './Skills';

const IntroPage = () => {
    const qualities = ['Resilient', 'Diligent', 'Fast Learner', 'Motivated', 'Team Player']
  return (
    <div>
        <div className='header-container'>
            {/* <div className='header-wrapper'>
                <img src="/IntroHeader.png" alt="Intro" />
            </div> */}
            <h3>INTRO</h3>
        </div>
        <div className="intro-body-container">
            <div className='about-me-container'>
                <div className='about-me-header-wrapper'>
                    <h2>ABOUT ME</h2>
                </div>
                <div className="about-me-body-wrapper">
                    <p>Hi I'm Sophia, I'm a software engineer.
            I have recently started my software journey after completing a bootcamp. I've dabbled in a few things but web development is my favourite!</p>
                </div>
            </div>
            <div className='skills-container'>
                <div className="skills-header-wrapper">
                    <h2>SKILLS</h2>
                </div>
                <div className='skills-body-wrapper'>
                    <Skills></Skills>
                </div>
            </div>
            <div className='qualities-container'>
                <div className="qualities-header-wrapper">
                    <h2>QUALITIES</h2>
                </div>
                <div className="qualities-body-wrapper">
                    {qualities.map((quality)=> (
                        <div className="quality-wrapper">
                        <p>{quality}</p>
                    </div>
                    ))}
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroPage;
