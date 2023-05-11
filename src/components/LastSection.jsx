import React from 'react';
import './LastSection.css';

class LastSection extends React.Component {
  render() {
    return (
      <section className="last-section">
        <div className="last-section-content">
          <div className="last-section-image">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80" alt="Big Image" />
          </div>
          
          <div className="last-section-details">
            <h2 className="last-section-heading">HONEYBADGERSCO</h2>
            <p className="last-section-text">is a technology and digital IT Consultation firm specializing in innovative software solutions. Which is Known for delivering high-quality and exceptional customer service. We believe that technology has the power to change the world, and we're driven to play a role in shaping its future. Whether it's making it easier for people to connect or improving how businesses operate, our goal is to use technology to positively impact people's lives.</p>
            <button className="read-more-button">More</button>
          </div>
        </div>
      </section>
    );
  }
}

export default LastSection;
