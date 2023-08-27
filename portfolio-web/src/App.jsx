import Background from './components/Background';
import './App.css';
import ContactPage from './components/ContactMePage/ContactPage';
import HomePage from './components/HomePage';
import IntroPage from './components/IntroPage';

function App() {
  return (
    <div className="App">
      <Background/>
      <HomePage></HomePage>
      <IntroPage></IntroPage>
      <ContactPage></ContactPage>
    </div>
  );
}

export default App;
