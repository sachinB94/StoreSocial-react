import React from 'react';

import { Toolbar, TextField, IconButton } from '../atoms';

const ContactListHeader = ({ search, onSearch, onAdd }) => (
  <Toolbar>
    <Toolbar.Title text="Contact List" />
    <Toolbar.Group lastChild>
      <TextField hintText="Search" value={search} onChange={onSearch} />
      <Toolbar.Separator />
      <IconButton icon="add" onClick={onAdd} />
    </Toolbar.Group>
  </Toolbar>
);

export default ContactListHeader;
