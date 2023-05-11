import React from 'react';
import './Section.css';

class Section extends React.Component {
  render() {
    const { heading, subheading, buttonText } = this.props;
    return (
      <section className="section">
        <div className="section-overlay">
          <div className="section-content">
            <h2 className="section-heading">{heading}</h2>
            <h3 className="section-subheading">{subheading}</h3>
            <button className="section-button">{buttonText}</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
