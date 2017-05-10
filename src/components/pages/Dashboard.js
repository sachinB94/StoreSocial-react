import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Loader, Grid, Row, Col } from '../atoms';
import { ContactList, ContactForm } from '../organisms';

import {
  contactList,
  selectContact,
  addClick,
  editClick,
  submitContact,
  cancel
} from '../../store/reducers/contact';
import { selectedContactSelector } from '../../store/selectors/contact';

const Container = styled.div`
`;

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.getContactList();
  }

  render() {
    const {
      loading,
      submitting,
      contacts,
      selected,
      operation,
      onEditClick,
      onSubmitContact,
      onCancel,
      onSelectContact,
      onAddClick
    } = this.props;

    return (
      <Container>
        {loading && <Loader />}
        <Grid>
          <Row>
            <Col
              xs={12}
              md={operation ? 6 : 12}
              style={{ height: '90vh', overflowY: 'auto' }}
            >
              <ContactList
                list={contacts}
                selected={selected._id}
                onSelect={onSelectContact}
                onAddClick={onAddClick}
              />
            </Col>
            {operation &&
              <Col xs={12} md={6} style={{ padding: 10 }}>
                <ContactForm
                  submitting={submitting}
                  contact={selected}
                  operation={operation}
                  onEditClick={onEditClick}
                  onSubmit={onSubmitContact}
                  onCancel={onCancel}
                />
              </Col>}
          </Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.contact.loading,
  submitting: state.contact.submitting,
  contacts: state.contact.list,
  selected: selectedContactSelector(state),
  operation: state.contact.operation
});

const mapDispatchToProps = dispatch => ({
  getContactList: () => dispatch(contactList()),
  onSelectContact: id => dispatch(selectContact(id)),
  onAddClick: () => dispatch(addClick()),
  onEditClick: () => dispatch(editClick()),
  onSubmitContact: contact => dispatch(submitContact(contact)),
  onCancel: () => dispatch(cancel())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
