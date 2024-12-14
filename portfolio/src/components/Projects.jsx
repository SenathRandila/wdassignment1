import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'E-commerce Platform',
      image: '/images/ecommerce.jpg', 
      description:
        'Edited short, capturing and engaging videos for the clients eccomerce websites',
      role: 'Video Editor',
      outcome: 'The platform launched successfully and increased the client’s online sales by 40%.',
    },
    {
      id: 2,
      title: 'DJ Company',
      image: '/images/dj-app.jpg', 
      description:
        'Edited multiple advertisements for a DJ company which was posted on all their social medias',
      role: 'Video Editor',
      outcome: 'The advertisements were featured at a local music festival, receiving praise for how well it was done.',
    },
    {
      id: 3,
      title: 'Life Coach',
      image: '/images/portfolio.jpg',
      description:
        'Edited multiple videos for a popular life coach. The videos were posted all over their social medias',
      role: 'Video Editor',
      outcome: 'The videos helped attract massive audiences and helped alot of people with their struggles through advice.',
    },
  ];

  return (
    <section className="projects container">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectList.map((project) => (
          <div className="project-item" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Outcome:</strong> {project.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
