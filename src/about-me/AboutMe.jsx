import './AboutMe.css';
import Kevin from '../assets/Kevin.jpg';

export const AboutMe = () => {
  return (
    <div className="about-me-wrapper">
      <div className="about-me-content-wrapper">
        <div className="image-wrapper">
          <img src={Kevin} alt="Kevin"></img>
          <div className="name-overlay">Kevin Nguyen</div>
        </div>

        <div className="about-me-text-wrapper">
          <h2>About me</h2>
          <p>
            I’ve always had a love for technology and the process of learning,
            which ultimately led me to web development. With a background in
            psychology, including Applied Behavioral Analysis (ABA) therapy,
            psychiatric hospital work, and case management, I’ve developed
            strong analytical and problem-solving skills.I began self-learning
            web development in 2023 and quickly fell in love with the entire
            process of building and creating through code. I thrive on
            collaborating with teams to turn ideas into reality and bring a
            unique perspective by blending my passion for technology with my
            experience in understanding human behavior.
          </p>
        </div>
      </div>
    </div>
  );
};
