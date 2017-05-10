import React from 'react';
import isEqual from 'lodash.isequal';

import {
  Card,
  Row,
  Grid,
  List,
  Divider,
  Subheader,
  IconButton,
  TextField,
  FlatButton,
  Loader,
  getIcon
} from '../atoms';

import { isMobile, isEmail } from '../../utils/validators';

class ContactForm extends React.Component {
  state = {
    contact: this.props.contact,
    error: {}
  };

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.contact, nextProps.contact)) {
      this.setState({ contact: nextProps.contact });
    }
  }

  onNameChange = value => {
    const { contact, error } = this.state;
    this.setState({
      contact: { ...contact, name: value },
      error: { ...error, name: !!value ? null : 'Invalid Name' }
    });
  };

  onMobileChange = value => {
    const { contact, error } = this.state;
    this.setState({
      contact: { ...contact, mobile: value },
      error: { ...error, mobile: isMobile(value) ? null : 'Invalid Mobile' }
    });
  };

  onEmailChange = value => {
    const { contact, error } = this.state;
    this.setState({
      contact: { ...contact, email: value },
      error: { ...error, email: isEmail(value) ? null : 'Invalid Email' }
    });
  };

  onCancel = () => {
    this.setState({ contact: this.props.contact, error: {} });
    this.props.onCancel();
  };

  render() {
    const { operation, submitting, onEditClick, onSubmit } = this.props;
    const { contact, error } = this.state;

    return (
      <Card>
        <Card.Text style={{ position: 'relative', padding: 0 }}>
          {submitting && <Loader />}
          <Subheader>
            <Grid>
              <Row between="xs">
                {operation === 'VIEW'
                  ? <span>{contact.name}</span>
                  : <TextField
                      fullWidth={false}
                      hintText="Name"
                      value={contact.name}
                      errorText={error.name}
                      onChange={this.onNameChange}
                    />}
                {operation === 'VIEW' &&
                  <IconButton icon="edit" onClick={onEditClick} />}
              </Row>
            </Grid>
          </Subheader>
          <List>
            <List.Item
              rightIcon={getIcon('phone')}
              disabled={operation !== 'VIEW'}
              primaryText={
                operation === 'VIEW'
                  ? contact.mobile
                  : <TextField
                      hintText="Mobile"
                      value={contact.mobile}
                      errorText={error.mobile}
                      onChange={this.onMobileChange}
                    />
              }
              secondaryText={operation === 'VIEW' && 'Mobile'}
              onClick={() =>
                contact.mobile && window.open(`tel:${contact.mobile}`)}
            />
            {operation === 'VIEW' && <Divider />}
            <List.Item
              rightIcon={getIcon('email')}
              disabled={operation !== 'VIEW'}
              primaryText={
                operation === 'VIEW'
                  ? contact.email
                  : <TextField
                      hintText="Email"
                      value={contact.email}
                      errorText={error.email}
                      onChange={this.onEmailChange}
                    />
              }
              secondaryText={operation === 'VIEW' && 'Email'}
              onClick={() =>
                contact.email && window.open(`mailto:${contact.email}`)}
            />
          </List>
        </Card.Text>
        {operation !== 'VIEW' &&
          <Card.Actions>
            <FlatButton primary onClick={() => onSubmit(this.state.contact)}>
              Submit
            </FlatButton>
            <FlatButton onClick={this.onCancel}>
              Cancel
            </FlatButton>
          </Card.Actions>}
      </Card>
    );
  }
}

export default ContactForm;
