import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Grid, Row, Col, Loader } from '../atoms';
import { Description, SigninCard } from '../organisms';

import { signin } from '../../store/reducers/auth';

const Container = styled.div`
  padding-top: 10vh;
`;

const Home = ({ loading, onSignin }) => (
  <Container>
    <Grid>
      <Row>
        <Col md={6}>
          <Description />
        </Col>
        <Col md={6}>
          <Row center="xs">
            <Col md={8} lg={6} style={{ position: 'relative' }}>
              {loading && <Loader />}
              <SigninCard onSignin={onSignin} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Container>
);

const mapStateToProps = state => ({
  loading: state.auth.signingIn
});

const mapDispatchToProps = dispatch => ({
  onSignin: user => dispatch(signin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
