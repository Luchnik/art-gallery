import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  );
}

export default Navigation;
