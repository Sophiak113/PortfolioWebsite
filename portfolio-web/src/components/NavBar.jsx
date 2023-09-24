import React from 'react';
import GlitchText from './GlitchText';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  return (
    <nav>
            <GlitchText tag='h3'text='MENU' textAlign='left'></GlitchText>
        <p>
          <ScrollLink to="home" smooth={true} duration={1000}>
            Home
          </ScrollLink>
        </p>
        <p>
          <ScrollLink to="intro" smooth={true} duration={1000}>
            Intro
          </ScrollLink>
        </p>
        <p>
          <ScrollLink to="projects" smooth={true} duration={1000}>
            Projects
          </ScrollLink>
        </p>
        <p>
          <ScrollLink to="contactMe" smooth={true} duration={1000}>
            Contact Me
          </ScrollLink>
        </p>
    </nav>
  );
};

export default NavBar
