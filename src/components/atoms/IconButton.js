import React from 'react';
import IconButton from 'material-ui/IconButton';

import getIcon from './icon';

const IconButtonComponents = props => (
  <IconButton {...props}>{getIcon(props.icon)}</IconButton>
);

export default IconButtonComponents;
