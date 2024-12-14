import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Video Editing',
      image: '/images/web-development.jpg', 
      description: 'Editing captivating videos under any niche.',
    },
    {
      id: 2,
      title: 'Social Media Handling',
      image: '/images/mobile-app.jpg', 
      description: 'Handling Social Media for clients',
    },
    {
      id: 3,
      title: 'Animation',
      image: '/images/ui-ux-design.jpg', 
      description: 'Using the power of animation to further enhance the already edited videos.',
    },
  ];

  return (
    <section className="services container">
      <h2>My Services</h2>
      <div className="services-list">
        {servicesList.map((service) => (
          <div className="service-item" key={service.id}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
