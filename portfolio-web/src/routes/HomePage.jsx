import React, {useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import GlitchText from '../components/GlitchText'

const HomePage = () => {
  //screenWidth and sameDiv are a part of responsiveness, when the screen becomes wide enough Sophia Kinsey comes onto 1 line instead of 2
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [orientation, setOrientation] = useState(window.screen.orientation.type);
  const [sameDiv, setSameDiv] = useState(screenWidth > 1024 || orientation == 'landscape-primary')


    //Checking for resize and if the screen width is over 1024, Sophia Kinsey is 1 div not 2
  useEffect(()=>{
    function handleResize(){
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
      setSameDiv(newWidth > 1024);
    };

    function handleOrientationChange() {
      const newOrientation = window.screen.orientation.type;
      setOrientation(newOrientation);
    }

    // Add an event listener for window resize and orientation change
    //orientation change is mainly for mobiles or tablets
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);


    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
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
