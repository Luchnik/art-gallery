import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { signOut } from '../../firebase/auth';
import './header.styles.scss';

const Header = ({ currentUser, history }) => {

  const handleSignOut = async () => {
    try {
      await signOut();
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

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
                onClick={handleSignOut}>
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

export default withRouter(Header);
