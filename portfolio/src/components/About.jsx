import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about container">
      <div className="about-content">
        <img
          src="/images/my-profile.png" 
          alt="Senath Randila"
          className="about-image"
        />
        <div className="about-text">
          <h2>Senath Randila Kurukulasooriya</h2>
          <p>
            Hi, I'm Senath, a professional video editor and student based in Sri Lanka and currently
            studying in Canada. With a strong focus on creating creative, captivating videos,
            I have worked on projects ranging from editing for life coaches
            to eCommerce platforms. I'm constantly learning and evolving as an editor,
            striving to deliver the best experiences for the audience.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
