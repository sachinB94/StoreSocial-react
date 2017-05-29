// @flow
import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

import getIcon from './icon';

class IconMenuComponent extends Component {
  render() {
    const { icon, children } = this.props;

    return (
      <IconMenu
        iconButtonElement={
          <IconButton iconStyle={{ color: '#FFF' }}>
            {getIcon(icon)}
          </IconButton>
        }
      >
        {children}
      </IconMenu>
    );
  }
}

export default muiThemeable()(IconMenuComponent);
