import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import './navigation.styles.scss';

const Navigation = ({ currentUser }) => {
  return (
    <nav className="navigation-container">

      <Link to="/" className="menu-item">Home</Link>

      <div className="user-data">
        {
          currentUser ? (
            <React.Fragment>
              <label>{currentUser.displayName}</label>
              <button
                onClick={() => auth.signOut()}
                className="sign-out">
                Sign Out
              </button>
            </React.Fragment>
          ) : (
            <Link
              to="/signin"
              className="menu-item">
              Sign In
            </Link>
          )
        }
      </div>
    </nav>
  );
}

export default Navigation;
