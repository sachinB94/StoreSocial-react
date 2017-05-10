import React from 'react';

import { Card, List } from '../atoms';
import { ContactListHeader, ContactListItem } from '../molecules';

class ContactList extends React.Component {
  state = {
    search: ''
  };

  render() {
    const { list, selected, onSelect, onAddClick } = this.props;
    const { search } = this.state;

    const smallSearch = search.toLowerCase();

    const contactList = !search
      ? list
      : list.filter(
          ({ name, mobile, email }) =>
            name.toLowerCase().indexOf(smallSearch) !== -1 ||
            (mobile && mobile.toLowerCase().indexOf(smallSearch) !== -1) ||
            (email && email.toLowerCase().indexOf(smallSearch) !== -1)
        );

    return (
      <Card>
        <Card.Text>
          <List>
            <ContactListHeader
              search={search}
              onSearch={value => this.setState({ search: value })}
              onAdd={onAddClick}
            />
            {contactList.map(contact => (
              <ContactListItem
                key={contact._id}
                contact={contact}
                isSelected={contact._id === selected}
                onSelect={() => onSelect(contact._id)}
              />
            ))}
          </List>
        </Card.Text>
      </Card>
    );
  }
}

export default ContactList;
