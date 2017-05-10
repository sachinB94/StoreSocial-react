import React from 'react';
import AppBar from 'material-ui/AppBar';

const AppBarComponent = (
  { title, showMenuIconButton, iconElementRight, iconStyleRight, onTitleClick }
) => (
  <AppBar
    title={title}
    showMenuIconButton={showMenuIconButton}
    iconElementRight={iconElementRight}
    iconStyleRight={iconStyleRight}
    onTitleTouchTap={onTitleClick}
  />
);

AppBarComponent.defaultProps = {
  title: '',
  showMenuIconButton: false,
  iconElementRight: null,
  iconStyleRight: {},
  onTitleClick: () => {}
};

export default AppBarComponent;
