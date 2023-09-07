import Background from './components/Background';

import ContactPage from './components/ContactMePageFolder/ContactPage';
import HomePage from './components/HomePage';
import IntroPage from './components/IntroPageFolder/IntroPage';
import ProjectsPage from './components/ProjectsPageFolder/ProjectsPage';
import NavBar from './components/NavBar';
import { Element, Link as ScrollLink } from 'react-scroll';
import './styles/App.scss';
import './styles/MediaQueries.scss';

function App() {
  return (
    <div className="App">

      <Background/>

 {/* Surrounding page-container and it's content in react-scroll's Element */}
 {/* so when a nav link is clicked it scrolls to the section */}
      <Element name="home">

      <div className="page-container">
{/* Page container is designed to be the same size as the viewport and allows the pages to be scroll snapped to */}

        <HomePage></HomePage>
      </div>
      </Element>
      <Element name="intro">
      <div className="page-container">
        <IntroPage></IntroPage>
      </div>
      </Element>
      <Element name="projects">
      <div className="page-container">
        <ProjectsPage></ProjectsPage>
      </div>
      </Element>
      <Element name="contactMe">
      <div className="page-container">
        <ContactPage></ContactPage>
      </div>
      </Element>
    </div>
  );
}

export default App;
