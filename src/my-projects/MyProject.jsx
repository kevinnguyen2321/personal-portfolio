import './MyProject.css';
import ConcertTrack from '../assets/concertTrack.png';
import CvApp from '../assets/cv-app.png';
import BattleShip from '../assets/Battleship.png';
import WeatherApp from '../assets/Weather-app.png';
import GithubIcon from '../assets/github.png';
import LinkIcon from '../assets/link.png';

export const MyProjects = () => {
  return (
    <>
      <h2 className="projects-header-text">My Projects</h2>
      <div className="projects-wrapper">
        <div className="project-card">
          <img src={ConcertTrack} alt="concertTrack" />
          <div className="project-card-content-wrapper">
            <div className="project-card-text-wrapper">
              <h3>concertTrack</h3>
              <p>
                ConcertTrack was built using React.js and vanilla CSS and is an
                app that helps users track upcoming concerts and stay connected
                with fellow music lovers.{' '}
              </p>
            </div>

            <div className="project-card-icons">
              <a
                href="https://github.com/kevinnguyen2321/concertTrack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github-img"
                  src={GithubIcon}
                  alt="github-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={CvApp} alt="cv-app" />
          <div className="project-card-content-wrapper">
            <div className="project-card-text-wrapper">
              <h3>Cv-Builder</h3>
              <p>
                Built with React.js, this front-end project allows users to
                easily create a custom resume by entering their information into
                form inputs.
              </p>
            </div>

            <div className="project-card-icons">
              <a
                href="https://github.com/kevinnguyen2321/cv-application"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github-img"
                  src={GithubIcon}
                  alt="github-icon"
                />
              </a>

              <a
                href="https://cv-app-resume-builder.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="link-img" src={LinkIcon} alt="link-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={BattleShip} alt="cv-app" />
          <div className="project-card-content-wrapper">
            <div className="project-card-text-wrapper">
              <h3>BattleShip</h3>
              <p>
                A Battleship game built with vanilla JavaScript and CSS, bundled
                with Webpack. Developed using Test-Driven Development (TDD) and
                tested with Jest.
              </p>
            </div>

            <div className="project-card-icons">
              <a
                href="https://github.com/kevinnguyen2321/battleship"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github-img"
                  src={GithubIcon}
                  alt="github-icon"
                />
              </a>

              <a
                href="https://kevinnguyen2321.github.io/battleship/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="link-img" src={LinkIcon} alt="link-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={WeatherApp} alt="cv-app" />
          <div className="project-card-content-wrapper">
            <div className="project-card-text-wrapper">
              <h3>Weather App</h3>
              <p>
                This weather app allows users to check real-time weather
                forecasts for any location by fetching data from the WeatherAPI.
                Built using vanilla JavaScript and CSS, the app features a
                simple, intuitive interface that displays current weather
                conditions.
              </p>
            </div>

            <div className="project-card-icons">
              <a
                href="https://github.com/kevinnguyen2321/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github-img"
                  src={GithubIcon}
                  alt="github-icon"
                />
              </a>

              <a
                href="https://kevinnguyen2321.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="link-img" src={LinkIcon} alt="link-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
