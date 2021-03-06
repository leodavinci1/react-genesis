import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

class NavbarComponent extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navbar--list">
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavbarComponent;
