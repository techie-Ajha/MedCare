import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-stethoscope',
      title: 'General Consultation',
      description: 'Expert general physicians for routine checkups and health concerns'
    },
    {
      icon: 'fa-heart',
      title: 'Cardiology',
      description: 'Advanced cardiac care and heart health monitoring'
    },
    {
      icon: 'fa-brain',
      title: 'Neurology',
      description: 'Specialized care for neurological conditions and disorders'
    },
    {
      icon: 'fa-eye',
      title: 'Ophthalmology',
      description: 'Complete eye care and vision correction services'
    },
    {
      icon: 'fa-bone',
      title: 'Orthopedics',
      description: 'Bone, joint, and muscle care with advanced treatments'
    },
    {
      icon: 'fa-baby',
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive healthcare solutions for all your medical needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
