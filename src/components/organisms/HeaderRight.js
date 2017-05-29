import React from 'react';
import styled from 'styled-components';

import { FlatButton, IconMenu, MenuItem } from '../atoms';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const HeaderRight = (
  { isLoggedIn, pathname, onSignup, onSignin, onProfile, onSignout }
) => (
  <Container>
    {isLoggedIn
      ? <IconMenu icon="menu">
          <MenuItem primaryText="Profile" onClick={onProfile} />
          <MenuItem primaryText="Sign out" onClick={onSignout} />
        </IconMenu>
      : pathname === '/'
          ? <FlatButton
              style={{ color: '#FFF' }}
              label="Sign up"
              onClick={onSignup}
            />
          : <FlatButton
              style={{ color: '#FFF' }}
              label="Sign in"
              onClick={onSignin}
            />}
  </Container>
);

export default HeaderRight;
