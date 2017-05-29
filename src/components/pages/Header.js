import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'styled-components';

import { AppBar, Logo } from '../atoms';
import { HeaderRight } from '../organisms';

import { signout } from '../../store/reducers/auth';

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Header = (
  {
    isLoggedIn,
    pathname,
    onTitleClick,
    onSignupClick,
    onSigninClick,
    onProfile,
    onSignoutClick
  }
) => (
  <Container>
    <AppBar
      title={
        <Title>
          <Logo.Image style={{ width: 50, height: 40 }} />
          <Logo.Text style={{ height: 40 }} />
        </Title>
      }
      showMenuIconButton={false}
      iconElementRight={
        <HeaderRight
          isLoggedIn={isLoggedIn}
          pathname={pathname}
          onSignup={onSignupClick}
          onSignin={onSigninClick}
          onProfile={onProfile}
          onSignout={onSignoutClick}
        />
      }
      iconStyleRight={{ marginTop: 0 }}
      onTitleClick={onTitleClick}
    />
  </Container>
);

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.auth.isLoggedIn,
  pathname: state.routing.locationBeforeTransitions.pathname
});

const mapDispatchToProps = dispatch => ({
  onTitleClick: () => dispatch(push('/')),
  onSigninClick: () => dispatch(push('/')),
  onSignupClick: () => dispatch(push('/signup')),
  onSignoutClick: () => dispatch(signout()),
  onProfile: () => dispatch(push('/profile'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
