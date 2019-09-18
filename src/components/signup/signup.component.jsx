import React from 'react';
import { withRouter } from 'react-router-dom';

import InputField from '../input-field/input-field.component';
import Button from '../button/button.component';
import { auth } from '../../firebase/auth';
import { createUserProfile } from '../../firebase/user-profile';

class SignUp extends React.PureComponent {

  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = async $event => {
    $event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Password don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfile(user, { displayName });
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
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up-container">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name="displayName"
            type="text"
            placeholder="Display Name"
            value={displayName}
            onInputChange={this.handleChange}
            required />
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
          <InputField
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onInputChange={this.handleChange}
            required />
          <div className="button-group">
            <Button
              type="submit"
              styleType="primary">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp);
