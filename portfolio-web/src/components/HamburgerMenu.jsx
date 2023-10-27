import React, {useState, useEffect} from 'react';
import GlitchText from './GlitchText';
// import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'; // If using React Router

const HamburgerMenu = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);
  const [isClicked, setIsClicked] = useState(false)

  useEffect (() =>{
    function handleResize(){
      setScreenWidth(window.innerWidth)
    if(screenWidth<700){
      setIsHamburger(true)
    }
    else{
      setIsHamburger(false)
    }
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };

  },[]);
  return (
    <nav>
    
            <GlitchText tag='h2'text='MENU' textAlign='center'></GlitchText>
        <Link to='/'>
          <img src="/Logos/SophiaKinseyLogo.png" alt="Sophia Kinsey" />
        </Link>
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

export default HamburgerMenu