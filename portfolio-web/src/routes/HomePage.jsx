import React, {useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import GlitchText from '../components/GlitchText'

const HomePage = () => {
  //screenWidth and sameDiv are a part of responsiveness, when the screen becomes wide enough Sophia Kinsey comes onto 1 line instead of 2
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [sameDiv, setSameDiv] = useState(screenWidth > 1024)

    //Checking for resize and if the screen width is over 1024, Sophia Kinsey is 1 div not 2
  useEffect(()=>{
    function handleResize(){
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
      setSameDiv(newWidth > 1024);
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };


  },[]);
  
  return (
    <div className="home-page-container">
      <div className="title-wrapper">
        {/* <img src="/Title.png" alt="Sophia Kinsey - Software Engineer" /> */}
        
        {sameDiv ? (
            <GlitchText tag='h3' text='Sophia Kinsey' id='' />
          ) : (
            <div className="title-name">
              <GlitchText tag='h3' text='Sophia' id='Sophia' />
              <GlitchText tag='h3' text='Kinsey' id='Kinsey' />
            </div>
          )}
          

        <GlitchText tag='h2' text='Web Developer' id='WebDeveloper'/>

      </div>
      <div className="header-nav">
        <NavBar></NavBar>
        <GlitchText tag='h2' text='Scroll'></GlitchText>
        <GlitchText tag='h2' text='↓'></GlitchText>

      </div>

      </div>
  )
}

export default HomePage
