import React from 'react';
import GlitchText from './GlitchText';
import { Link as ScrollLink } from 'react-scroll';
// import { Link } from 'react-router-dom'; // If using React Router

const NavBar = () => {
  return (
    <nav>
            <GlitchText tag='h2'text='MENU' textAlign='center'></GlitchText>
        <p>
          <a href="">Home</a>
        </p>
        <p>
        <a href="">Intro</a>
        </p>
        <p>
        <a href="">Projects</a>
        </p>
        <p>
        <a href="">Contact Me</a>
        </p>
    </nav>
  );
};

export default NavBar
