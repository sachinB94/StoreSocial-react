import React from 'react';

import { List, TextField, getIcon } from '../atoms';

const ContactFormItem = (
  { icon, operation, value, error, onChange, onClick }
) => (
  <List.Item
    rightIcon={getIcon(icon)}
    disabled={operation !== 'VIEW'}
    primaryText={
      operation === 'VIEW'
        ? value
        : <TextField
            hintText="Mobile"
            value={value}
            errorText={error}
            onChange={onChange}
          />
    }
    secondaryText={operation === 'VIEW' && 'Mobile'}
    onClick={onClick}
  />
);

export default ContactFormItem;
