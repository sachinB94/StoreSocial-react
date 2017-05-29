import React from 'react';
import { connect } from 'react-redux';

import { Grid, Row, Col, Loader } from '../atoms';
import { Description, SigninCard } from '../organisms';

import { signin } from '../../store/reducers/auth';

const Home = ({ loading, onSignin }) => (
  <div>
    <Grid>
      <Row>
        <Col md={6} xs={12} style={{ marginTop: '5vh' }}>
          <Row center="xs">
            <Description />
          </Row>
        </Col>
        <Col md={6} xs={12} style={{ marginTop: '5vh' }}>
          <Row center="xs">
            <Col md={8} lg={6} style={{ position: 'relative' }}>
              {loading && <Loader />}
              <SigninCard onSignin={onSignin} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </div>
);

const mapStateToProps = state => ({
  loading: state.auth.signingIn
});

const mapDispatchToProps = dispatch => ({
  onSignin: user => dispatch(signin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
