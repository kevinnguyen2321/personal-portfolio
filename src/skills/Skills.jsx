import {
  FaJs,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaCode,
} from 'react-icons/fa';
import { SiJest, SiWebpack } from 'react-icons/si';
import CsharpIcon from '../assets/csharp.png';
import DotNetCoreIcon from '../assets/.net.png';
import PostgresSqlIcon from '../assets/postgres.png';

import './Skills.css'; // Add your styles here

export const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { id: 2, name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
    { id: 3, name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
    { id: 4, name: 'React', icon: <FaReact color="#61DAFB" /> },
    {
      id: 5,
      name: 'C#',
      icon: <img src={CsharpIcon} alt="C# Logo" style={{ width: '50px' }} />,
    },
    {
      id: 6,
      name: '.Net',
      icon: (
        <img src={DotNetCoreIcon} alt=".Net Logo" style={{ width: '50px' }} />
      ),
    },
    {
      id: 7,
      name: 'PostgreSQL',
      icon: (
        <img
          src={PostgresSqlIcon}
          alt="PostgreSQL Logo"
          style={{ width: '50px' }}
        />
      ),
    }, // Changed from SiCsharp to FaCode // Changed from SiCsharp to FaCode // Changed from SiCsharp to FaCode
    { id: 8, name: 'Jest', icon: <SiJest color="#C21325" /> },
    { id: 9, name: 'Webpack', icon: <SiWebpack color="#8DD6F9" /> },
    { id: 10, name: 'Git', icon: <FaGitAlt color="#F05033" /> },
  ];

  return (
    <div className="skills-wrapper">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
