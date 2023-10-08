import React from 'react'
import NavBar from '../components/NavBar'
import GlitchText from '../components/GlitchText'

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="title-wrapper">
        {/* <img src="/Title.png" alt="Sophia Kinsey - Software Engineer" /> */}
        <div className="title-name">
          <GlitchText tag='h3' text='Sophia' id='Sophia'/>
          <GlitchText tag='h3' text='Kinsey' id='Kinsey'/>
        </div>

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
