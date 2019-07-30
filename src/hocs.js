import React from 'react';

import { UserContext } from './App';

export const withCurrentUser = Component => {
  class withCurrentComponent extends React.Component {
    render() {
      return (
        <UserContext.Consumer>
          {currentUser => (
            <Component currentUser={currentUser} {...this.props} />
          )}
        </UserContext.Consumer>
      );
    }
  }

  return withCurrentComponent;
};
