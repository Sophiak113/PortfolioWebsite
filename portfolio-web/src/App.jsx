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
      <HomePage></HomePage>
      <IntroPage></IntroPage>
      <ProjectsPage></ProjectsPage>
      <ContactPage></ContactPage>
    </div>
  );
}

export default App;
