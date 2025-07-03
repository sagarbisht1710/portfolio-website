import React from 'react';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <FaHtml5 size={50} color="#E44D26" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt size={50} color="#264de4" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FaJs size={50} color="#F7DF1E" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaReact size={50} color="#61DBFB" />
          <p>React.js</p>
        </div>
        <div className="skill">
          <SiExpress size={50} color="#000000" />
          <p>Express.js</p>
        </div>
        <div className="skill">
          <FaJava size={50} color="#007396" />
          <p>Java</p>
        </div>
        <div className="skill">
          <FaDatabase size={50} color="#4DB33D" />
          <p>Database</p>
        </div>
        <div className="skill">
          <SiMongodb size={50} color="#47A248" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <SiMysql size={50} color="#00758F" />
          <p>MySQL</p>
        </div>
        <div className="skill">
          <FaGitAlt size={50} color="#F1502F" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
