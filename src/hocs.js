import React from 'react';

import { UserContext } from './App';

export const withCurrentUser = Component => {
  class withCurrentComponent extends React.Component {
    render() {
      return (
        <UserContext.Consumer>
          {currentUser => (
            currentUser && <Component currentUser={currentUser} {...this.props} />
          )}
        </UserContext.Consumer>
      );
    }
  }

  return withCurrentComponent;
};
