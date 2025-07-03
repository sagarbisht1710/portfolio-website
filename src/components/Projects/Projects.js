import React from 'react';
import './Projects.css';
import LazyLoad from 'react-lazyload';

const Projects = () => {
  const projectData = [
    {
      title: 'Car-Rental-System',
      issuedBy: 'Personal Project',
      description: 'Car Rental System is a desktop application built entirely using Java . It enables efficient vehicle booking, management, and return through dedicated admin and customer modules.',
      technologies: 'Core Java, OOPs, Java Collections, File Handling ',
      link: 'https://github.com/sagarbisht1710/Car-Rental-System.git',
    },
    {
      title: 'Tour-Project-main',
      issuedBy: 'Personal Project',
      description: 'A responsive and interactive travel website built to showcase tour packages, destinations, and contact features. Designed with a user-friendly interface and modern front-end technologies, this project demonstrates a complete travel website UI.',
      technologies: 'HTML , CSS, JavaScript',
      link: 'https://github.com/sagarbisht1710/Tour-Project-main.git;',
    },
    {
      title: 'Quiz-Genie',
      issuedBy: 'Final year Project',
      description: 'Quiz Genie is a responsive AI-powered quiz generation website that allows users to create, customize, and take quizzes based on selected topics and difficulty levels. It features real-time question generation using the Gemine API, secure user authentication, and a smooth, interactive UI for an enhanced quiz-taking experience.   ',
      technologies: 'HTML, CSS, JavaScript , Bootstrap, Python, Flask, Gemine API, JWT Authentication   ',
      link: 'https://github.com/sagarbisht1710/quiz-genie.git',
    },
     
  ];

  return (
    <section className="projects" id="projects">
      <LazyLoad height={200} offset={100} once>
        <h2>Projects</h2>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-issued-by">Issued by: {project.issuedBy}</p>
                <p className="project-description">{project.description}</p>
                <p className="project-technologies">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </LazyLoad>
    </section>
  );
};

export default Projects;
