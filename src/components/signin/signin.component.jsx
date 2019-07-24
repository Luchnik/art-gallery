import React from 'react';

import { auth, signInWithGoogle } from '../../firebase';
import './signin.styles.scss';

class SignIn extends React.Component {

  state = {
    email: '',
    password: ''
  };

  handleSubmit = async $event => {
    $event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = $event => {
    const { name, value } = $event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in-container">
        <h2>Sign in</h2>
        <p>I already have an account</p>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required />
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
            required />
          <div className="sign-in-options">
            <input type="submit" value="Sign In" />
            <button
              className="btn google-signin"
              onClick={signInWithGoogle}>
              Sign In With Google
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
