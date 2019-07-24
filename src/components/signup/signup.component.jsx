import React from 'react';

import { auth, createUserProfile } from '../../firebase';

class SignUp extends React.Component {

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

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
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
      <div className="sign-in-container">
        <h2>Sign Up</h2>
        <p>I don't have an account</p>
        <form onSubmit={this.handleSubmit}>
          <input
            name="displayName"
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={this.handleChange}
            required />
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
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={this.handleChange}
            required />
          <div className="sign-in-options">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
