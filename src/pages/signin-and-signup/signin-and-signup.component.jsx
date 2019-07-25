import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import './signin-and-signup.styles.scss';

const SignInAndSignUp = () => {
  return (
    <div className="signin-and-signup-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
