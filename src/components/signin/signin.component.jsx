import React from 'react';

import InputField from '../input-field/input-field.component';
import Button from '../button/button.component';
import { auth, signInWithGoogle } from '../../firebase';

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
              onClick={signInWithGoogle}
              googleLogIn>
              Log In With Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
