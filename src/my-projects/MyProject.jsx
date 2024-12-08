import './MyProject.css';
import ConcertTrack from '../assets/ConcertTrack.png';
import CvApp from '../assets/cv-app.png';
import BattleShip from '../assets/BattleShip.png';
import WeatherApp from '../assets/Weather-app.png';

export const MyProjects = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div className="projects-wrapper">
        <div className="project-card">
          <img src={ConcertTrack} alt="concertTrack" />
          <h3>concertTrack</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="project-card">
          <img src={CvApp} alt="cv-app" />
          <h3>Cv-App</h3>v{' '}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="project-card">
          <img src={BattleShip} alt="cv-app" />
          <h3>BattleShip</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="project-card">
          <img src={WeatherApp} alt="cv-app" />
          <h3>Weather App</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
    </>
  );
};
