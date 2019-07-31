import React from 'react';
import { withRouter } from 'react-router-dom';

import InputField from '../input-field/input-field.component';
import Button from '../button/button.component';
import { auth, signInWithGoogle } from '../../firebase/auth';

class SignIn extends React.PureComponent {

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
      this.props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      this.props.history.push('/');
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
        <h2>Log in</h2>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onInputChange={this.handleChange}
            required />
          <InputField
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onInputChange={this.handleChange}
            required />
          <div className="button-group">
            <Button type="submit">
              Log In
            </Button>
            <Button
              onClick={this.handleGoogleSignIn}
              googleLogIn>
              Log In With Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn);
