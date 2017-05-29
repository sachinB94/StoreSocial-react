import React from 'react';

import { Card, RaisedButton, TextField } from '../atoms';

import { isEmail } from '../../utils/validators';

class SigninCard extends React.Component {
  state = {
    email: '',
    password: '',
    emailError: null,
    passwordError: null
  };

  onEmailChange = email => {
    this.setState({
      email,
      emailError: isEmail(email) ? null : 'Invalid Email'
    });
  };

  onPasswordChange = password => {
    this.setState({
      password,
      passwordError: !!password ? null : 'Invalid Password'
    });
  };

  onSignup = () => {
    const { email, password } = this.state;
    const emailError = isEmail(email) ? null : 'Invalid Email';
    const passwordError = !!password ? null : 'Invalid Password';

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return;
    }

    this.props.onSignin({ email, password });
  };

  render() {
    const {
      email,
      password,
      emailError,
      passwordError
    } = this.state;

    return (
      <Card style={{ padding: 20, margin: 10 }}>
        <Card.Text>
          <div style={{ fontSize: 20, paddingBottom: 20 }}>
            Sign in here
          </div>
          <TextField
            type="text"
            hintText="Email"
            floatingLabelText="Email"
            value={email}
            errorText={emailError}
            onChange={this.onEmailChange}
          />
          <TextField
            type="password"
            hintText="Password"
            floatingLabelText="Password"
            value={password}
            errorText={passwordError}
            onChange={this.onPasswordChange}
          />
        </Card.Text>
        <Card.Actions>
          <RaisedButton
            fullWidth
            primary
            label="Sign in"
            onClick={this.onSignup}
          />
        </Card.Actions>
      </Card>
    );
  }
}

export default SigninCard;
