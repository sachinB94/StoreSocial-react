import React from 'react';
import styled from 'styled-components';
import { FlatButton } from '../atoms';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const HeaderRight = (
  { isLoggedIn, pathname, onSignup, onSignin, onSignout }
) => (
  <Container>
    {isLoggedIn
      ? <FlatButton
          style={{ color: '#FFF' }}
          label="Sign out"
          onClick={onSignout}
        />
      : pathname === '/'
          ? <FlatButton
              style={{ color: '#FFF' }}
              label="Don't have an account? Sign up"
              onClick={onSignup}
            />
          : <FlatButton
              style={{ color: '#FFF' }}
              label="Already have an account? Sign in"
              onClick={onSignin}
            />}
  </Container>
);

export default HeaderRight;
