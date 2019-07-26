import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <header className="header-container">
      <div className="wrapper">
        <Link
          className="menu-item"
          to="/">Store
        </Link>

        {
          currentUser ? (
            <div
              className="menu-item"
              onClick={() => auth.signOut()}>
              Log Out
            </div>
          ) : (
            <Link
              className="menu-item"
              to="/signin">
              Log In
            </Link>
          )
        }
      </div>
    </header>
  );
}

export default Header;
