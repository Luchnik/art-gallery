import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import './auth.styles.scss';

const Auth = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Auth;
