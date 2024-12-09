import './Contact.css';
import LinkedInIcon from '../assets/linkedin.png';
import EmailIcon from '../assets/mail.png';
import GithubIcon from '../assets/github.png';

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div>
        <h2>Contact Me</h2>
        <p>
          If you have any questions or would like to collobarate you can get in
          contact with me at any of the contacts below
        </p>

        <div className="linkedin-wrapper">
          <a
            href="https://www.linkedin.com/in/kevin-nguyen23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="linked-in-icon" />
          </a>
          <p>{"Let's Connect"}</p>
        </div>

        <div className="github-wrapper">
          <a
            href="https://github.com/kevinnguyen2321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github-icon" src={GithubIcon} alt="github-icon" />
          </a>
        </div>

        <div className="email-wrapper">
          <p>
            <img className="email-icon" src={EmailIcon} alt="Email-icon" />
            :Kevin.nguyen9703@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};