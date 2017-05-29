import React from 'react';

import { Toolbar, TextField, IconButton } from '../atoms';

class ContactListHeader extends React.Component {
  state = {
    searchExpanded: false
  };

  toggleSearch = () => {
    this.setState({ searchExpanded: !this.state.searchExpanded });
    this.props.onSearch('');
  };

  render() {
    const { search, onSearch, onAdd } = this.props;
    const { searchExpanded } = this.state;

    return (
      <Toolbar>
        <Toolbar.Title text="Contact List" />
        <Toolbar.Group lastChild>
          <IconButton icon="search" onClick={this.toggleSearch} />
          <TextField
            hintText="Search"
            style={{
              width: searchExpanded ? '100%' : 0,
              overflowX: 'hidden',
              transition: 'width 0.4s ease-in-out'
            }}
            value={search}
            onChange={onSearch}
          />
          <IconButton icon="add" onClick={onAdd} />
        </Toolbar.Group>
      </Toolbar>
    );
  }
}

export default ContactListHeader;
