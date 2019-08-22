import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Rating from '../rating/rating.component';
import Button from '../button/button.component';
import { signOut } from '../../firebase/auth';
import './header.styles.scss';

const Header = ({ currentUser, history, location }) => {

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
        <div className="navigation-container">
          <Link
            className="menu-item"
            to="/">
            {currentUser ? 'My Gallery' : 'Home'}
          </Link>

          <Link
            className="menu-item"
            to="/artists">
            Artists
          </Link>
        </div>

        <div className="user-container">
          {currentUser ? (
            <React.Fragment>
              {
                location.pathname !== '/new' &&
                  <Button
                    type="button"
                    small
                    onClick={() => history.push('/new')}
                    styleType="primary">
                    Add new
                  </Button>
              }
              <div className="user-data-container">
                <div className="display-name">
                  <Rating rating={currentUser.rating} />
                  {currentUser.displayName}
                </div>
                <div
                  className="menu-item"
                  onClick={handleSignOut}>
                  Log Out
                </div>
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
