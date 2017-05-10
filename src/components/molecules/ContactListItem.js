import React from 'react';

import { List, Avatar, IconButton } from '../atoms';

import { isMobileDevice } from '../../utils/helpers';

const ContactListItem = ({ contact, isSelected, onSelect }) => {
  const onRightIconClick = () => {
    if (isMobileDevice && contact.mobile) {
      window.open(`tel:${contact.mobile}`);
    } else if (!this.isMobile && contact.email) {
      window.open(`mailto:${contact.email}`);
    }
  };

  return (
    <List.Item
      value={contact._id}
      style={{
        backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.2)' : 'inherit'
      }}
      primaryText={contact.name}
      leftAvatar={<Avatar>{contact.name.charAt(0).toUpperCase()}</Avatar>}
      rightIconButton={
        <IconButton
          style={{
            display: (isMobileDevice && contact.mobile) ||
              (!isMobileDevice && contact.email)
              ? 'block'
              : 'none'
          }}
          icon={isMobileDevice ? 'phone' : 'email'}
          onClick={onRightIconClick}
        />
      }
      onClick={onSelect}
    />
  );
};

export default ContactListItem;
