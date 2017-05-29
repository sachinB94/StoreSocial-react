import React from 'react';

import { Card, RaisedButton, TextField, Logo } from '../atoms';

import { isEmail } from '../../utils/validators';

class SignupCard extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    nameError: null,
    emailError: null,
    passwordError: null
  };

  onNameChange = name => {
    this.setState({
      name,
      nameError: !!name ? null : 'Invalid Name'
    });
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
    const { email, password, name } = this.state;
    const nameError = !!name ? null : 'Invalid Name';
    const emailError = isEmail(email) ? null : 'Invalid Email';
    const passwordError = !!password ? null : 'Invalid Password';

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return;
    }

    this.props.onSignup({ name, email, password });
  };

  render() {
    const {
      name,
      email,
      password,
      nameError,
      emailError,
      passwordError
    } = this.state;

    return (
      <Card style={{ padding: 20, margin: 10 }}>
        <Card.Text>
          <div style={{ paddingBottom: 20 }}>
            <Logo.WithText style={{ width: '70%' }} />
          </div>
          <TextField
            type="text"
            hintText="Name"
            floatingLabelText="Name"
            value={name}
            errorText={nameError}
            onChange={this.onNameChange}
          />
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
            label="Sign up"
            onClick={this.onSignup}
          />
        </Card.Actions>
      </Card>
    );
  }
}

export default SignupCard;
