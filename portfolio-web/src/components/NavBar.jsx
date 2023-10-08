import React from 'react';
import GlitchText from './GlitchText';
// import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'; // If using React Router

const NavBar = () => {
  return (
    <nav>
            <GlitchText tag='h2'text='MENU' textAlign='center'></GlitchText>
        <p>
              <Link to='/'>Home</Link> 
         </p>
        <p>
        <Link to='/info/intro'>Intro</Link> 
        </p>
        <p>
        <Link to='/info/projects'>Projects</Link> 
        </p>
        <p>
        <Link to='/info/contact'>Contact Me</Link> 
        </p>
    </nav>
  );
};

export default NavBar
