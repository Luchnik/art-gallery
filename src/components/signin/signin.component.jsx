import React from 'react';

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

    return(
      <React.Fragment>
        <label>Sign in</label>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required />
          <br />
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
            required />
          <br />
          <input type="submit" value="Sign In" />
        </form>
      </React.Fragment>
    )
  }
}

export default SignIn;
