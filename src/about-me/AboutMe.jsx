import './AboutMe.css';
import Kevin from '../assets/Kevin.jpg';

export const AboutMe = () => {
  return (
    <div className="about-me-wrapper">
      <div className="about-me-content-wrapper">
        <img src={Kevin} alt="Kevin" />

        <div className="about-me-text-wrapper">
          <h2>About me</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
            ab, doloremque atque ad repudiandae hic veritatis voluptatem
            provident excepturi rem quos aperiam praesentium minus omnis
            eligendi non ipsum, laboriosam deleniti.
          </p>
        </div>
      </div>
    </div>
  );
};
