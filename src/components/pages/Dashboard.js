import React from 'react';
import { connect } from 'react-redux';

import { Loader, Grid, Row, Col, Dialog } from '../atoms';
import { ContactList, ContactForm } from '../organisms';

import {
  contactList,
  selectContact,
  addClick,
  editClick,
  deleteContact,
  submitContact,
  cancel,
  modalClose
} from '../../store/reducers/contact';
import { selectedContactSelector } from '../../store/selectors/contact';

import { isMobileDevice } from '../../utils/helpers';

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
      onDeleteClick,
      onSubmitContact,
      onCancel,
      onModalClose,
      onSelectContact,
      onAddClick
    } = this.props;

    return (
      <div>
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
            {isMobileDevice &&
              <Dialog
                autoScrollBodyContent
                title="Your Contact"
                modal={false}
                style={{ width: '100%' }}
                contentStyle={{ width: '90%' }}
                open={!!operation}
                onRequestClose={onModalClose}
              >
                <div style={{ paddingTop: 20 }}>
                  <ContactForm
                    submitting={submitting}
                    contact={selected}
                    operation={operation}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
                    onSubmit={onSubmitContact}
                    onCancel={onCancel}
                  />
                </div>
              </Dialog>}
            {!isMobileDevice &&
              operation &&
              <Col xs={12} md={6} style={{ padding: 10 }}>
                <ContactForm
                  submitting={submitting}
                  contact={selected}
                  operation={operation}
                  onEditClick={onEditClick}
                  onDeleteClick={onDeleteClick}
                  onSubmit={onSubmitContact}
                  onCancel={onCancel}
                />
              </Col>}
          </Row>
        </Grid>
      </div>
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
  onDeleteClick: () => dispatch(deleteContact()),
  onSubmitContact: contact => dispatch(submitContact(contact)),
  onCancel: () => dispatch(cancel()),
  onModalClose: () => dispatch(modalClose())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
