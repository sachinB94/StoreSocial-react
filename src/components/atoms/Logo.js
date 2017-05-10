import React from 'react';

import logo from './logo.png';
import logoWithText from './logo-with-text.png';
import logoText from './logo-text.png';

const Logo = {
  Image: props => <img src={logo} alt="Logo" {...props} />,
  WithText: props => <img src={logoWithText} alt="Logo" {...props} />,
  Text: props => <img src={logoText} alt="Logo" {...props} />
};

export default Logo;
