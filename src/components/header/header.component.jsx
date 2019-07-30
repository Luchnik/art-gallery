import React from 'react';
import { Link } from 'react-router-dom';

import { signOut } from '../../firebase/auth';
import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <header className="header-container">
      <div className="wrapper">
        <Link
          className="menu-item"
          to="/">
          Home
        </Link>

        <div className="user-data-container">
          {currentUser ? (
            <React.Fragment>
              <span className="display-name">{currentUser.displayName}</span>
              <div
                className="menu-item"
                onClick={signOut}>
                Log Out
              </div>
            </React.Fragment>
          ) : (
            <Link
              className="menu-item"
              to="/signin">
              Log In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
