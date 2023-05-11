import React from 'react'
import PropTypes from "prop-types"

const Navbar = (props) => {
  return (
    <div className='sticky-top'>
   <nav class="navbar bg-dark bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">HoneyBadgersCo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Antivirus</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">POS</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Social media BIO Links</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Sales Team</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Customer Support</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Partner with us</a></li>
          </ul>
        </li>
       <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

Navbar.propTypes = {
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  title:"set your title"
}

// import React from 'react';
// import './Navbar.css';

// class Navbar extends React.Component {
//   render() {
//     return (
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <a href="/">
//             {/* Add your logo or text here */}
//             Logo
//           </a>
//         </div>

//         <ul className="navbar-menu">
//           <li className="navbar-item">
//             <a href="/">Home</a>
//           </li>
//           <li className="navbar-item">
//             <a href="/products">Products</a>
//           </li>
//           <li className="navbar-item">
//             <a href="/about">About Us</a>
//           </li>
//           <li className="navbar-item">
//             <a href="/contact">Contact Us</a>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;


