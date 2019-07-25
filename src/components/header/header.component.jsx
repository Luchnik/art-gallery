import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <header className="header-container">
      <div className="wrapper">
        <Link to="/" className="menu-item">Store</Link>

        {
          currentUser ? (
            <button onClick={() => auth.signOut()}>Log Out</button>
          ) : (
            <Link to="/signin">Log In</Link>
          )
        }
      </div>
    </header>
  );
}

export default Header;
