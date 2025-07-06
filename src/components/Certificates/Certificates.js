// Certificates.js
import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Introduction to Software Engineering',
      issuedBy: 'IBM',
      link: 'https://www.coursera.org/account/accomplishments/verify/X5F6ZQZKYWSJ',
    },
    {
      title: 'React Native',
      issuedBy: 'Meta',
      link: 'https://www.coursera.org/account/accomplishments/verify/PGHFDMA4ZJ29',
    },
    {
      title: 'Introduction to Web Development with HTML, CSS, JavaScript',
      issuedBy: 'IBM',
      link: 'https://www.coursera.org/account/accomplishments/verify/SJYFTXEJUJ4N',
    },
    {
      title: 'Introduction to Back-End Development',
      issuedBy: 'Meta',
      link: 'https://www.coursera.org/account/accomplishments/verify/FYZ7NMTH5CRK',
    },
    {
      title: 'Introduction to DevOps',
      issuedBy: 'IBM',
      link: 'https://www.coursera.org/account/accomplishments/verify/JTERTFT7KAPR',
    },
  
  ];

  return (
    <section className="certificates" id="certificates">
      <h2>Certificates</h2>
      <div className="certificate-cards">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <h3>{cert.title}</h3>
            <p>Issued by: {cert.issuedBy}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
