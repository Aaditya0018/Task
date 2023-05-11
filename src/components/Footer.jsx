import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    const { copyright } = this.props;

    return (
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">Copyright © <span>HoneyBadgersCo Pvt Ltd.</span></p>
        </div>
      </footer>
    );
  }
}

export default Footer;
