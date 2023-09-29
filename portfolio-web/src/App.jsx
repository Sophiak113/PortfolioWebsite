import React, {useRef, useState} from 'react';
import Background from './components/Background';
import FixedImagesTop from './components/FixedImagesTop';
import FixedImagesBot from './components/FixedImagesBot';
import ContactPage from './components/ContactMePageFolder/ContactPage';
import HomePage from './components/HomePage';
import IntroPage from './components/IntroPageFolder/IntroPage';
import ProjectsPage from './components/ProjectsPageFolder/ProjectsPage';
import { Element, Link as ScrollLink } from 'react-scroll';
import Footer from './components/Footer';
import './components/styles/Footer.scss';
import './components/styles/FramingImgs.scss';
import './components/styles/App.scss';
import './components/styles/MediaQueries.scss';

function App() {
  const bodyContainerRef = useRef(null);
  const homeContainerRef = useRef(null);
  const introSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const homeButtonRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      // Calculate the desired offset (e.g., 20 pixels above the start of the block)
      const desiredOffset = -20; // Adjust this value as needed
  
      if (ref.current == homeButtonRef) {
        // Scroll to the top of the first-page-container (container above body)
        bodyContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        homeContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

      } else {
        // Scroll to the top of the body-container (main container)
        bodyContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
  
      // Delay the second scroll to allow time for the main container to scroll into view
      setTimeout(() => {
        // Get the element's position relative to the viewport within the scrollable-container
        const rect = ref.current.getBoundingClientRect();
  
        // Calculate the scroll position within the scrollable-container
        const scrollTop = bodyContainerRef.current.scrollTop + rect.top - desiredOffset;
  
        // Scroll to the adjusted position within the scrollable-container
        bodyContainerRef.current.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }, 500); // Adjust the delay as needed (milliseconds)
    }
  };


  return (
    <div className="App">

      

 {/* Surrounding page-container and it's content in react-scroll's Element */}
 {/* so when a nav link is clicked it scrolls to the section */}
      {/* Giving the first page container an ID so I can put it in a :not selector */}
      <div className="page-container" id='first-page-container' ref={homeContainerRef}>
      <Background/>
{/* Page container is designed to be the same size as the viewport and allows the pages to be scroll snapped to */}

        <HomePage></HomePage>
        
      </div>

      <div className="body-container" ref={bodyContainerRef}>
      <FixedImagesTop/>

        <div className="scrollable-container">
          <IntroPage ref={introSectionRef}></IntroPage>
          <ProjectsPage ref={projectsSectionRef}></ProjectsPage>
          <ContactPage ref={contactSectionRef}></ContactPage>
          </div>
          <FixedImagesBot></FixedImagesBot>
      </div>
      <Footer></Footer>

        
      {/* <div className="scroll-links">
      <button ref={homeButtonRef} onClick={() => scrollToSection(homeContainerRef)}>
          Scroll to Home
        </button>
        <button onClick={() => scrollToSection(introSectionRef)}>
          Scroll to Intro
        </button>
        <button onClick={() => scrollToSection(projectsSectionRef)}>
          Scroll to Projects
        </button>
        <button onClick={() => scrollToSection(contactSectionRef)}>
          Scroll to Contact
        </button>
      </div> */}

      

    </div>
  );
}

export default App;
