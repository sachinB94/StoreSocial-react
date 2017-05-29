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
  Loader
} from '../atoms';
import { ContactFormItem } from '../molecules';

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
    const {
      operation,
      submitting,
      onEditClick,
      onDeleteClick,
      onSubmit
    } = this.props;
    const { contact, error } = this.state;

    return (
      <Card>
        <Card.Text style={{ position: 'relative', padding: 10 }}>
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
                {operation === 'EDIT' &&
                  <IconButton
                    icon="delete"
                    iconStyle={{ color: '#F44336' }}
                    onClick={onDeleteClick}
                  />}
              </Row>
            </Grid>
          </Subheader>
          <List>
            <ContactFormItem
              icon="phone"
              operation={operation}
              value={contact.mobile}
              error={error.mobile}
              onChange={this.onMobileChange}
              onClick={() =>
                operation === 'VIEW' &&
                contact.mobile &&
                window.open(`tel:${contact.mobile}`)}
            />
            {operation === 'VIEW' && <Divider />}
            <ContactFormItem
              icon="email"
              operation={operation}
              value={contact.email}
              error={error.email}
              onChange={this.onEmailChange}
              onClick={() =>
                operation === 'VIEW' &&
                contact.email &&
                window.open(`mailto:${contact.email}`)}
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
