import React from 'react';

import './signin.styles.scss';

class SignIn extends React.Component {

  state = {
    email: '',
    password: ''
  };

  handleSubmit = $event => {
    $event.preventDefault();

    this.setState({ email: '', password: '' });
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
          <input type="submit" value="Sign In" />
        </form>
      </div>
    )
  }
}

export default SignIn;
