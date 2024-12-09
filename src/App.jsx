import './App.css';
import { AboutMe } from './about-me/AboutMe';
import { Contact } from './contact/Contact';
import { MyProjects } from './my-projects/MyProject';
import { Skills } from './skills/Skills';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <AboutMe />
        <Skills />
        <MyProjects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
