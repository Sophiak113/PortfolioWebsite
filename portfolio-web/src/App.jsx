import Background from './components/Background';
import './App.scss';
import ContactPage from './components/ContactMePage/ContactPage';
import HomePage from './components/HomePage';
import IntroPage from './components/IntroPage';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Background/>
      <div className="page-container">
        <HomePage></HomePage>
      </div>
      <div className="page-container">
        <IntroPage></IntroPage>
      </div>
      <div className="page-container">
        <ProjectsPage></ProjectsPage>
      </div>
      <div className="page-container">
        <ContactPage></ContactPage>
      </div>
    </div>
  );
}

export default App;
