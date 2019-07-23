import React from 'react';

import SignIn from '../../components/signin/signin.component';
import './auth.styles.scss';

const Auth = () => {
  return (
    <div className="auth-container">
      <SignIn />
    </div>
  );
}

export default Auth;
