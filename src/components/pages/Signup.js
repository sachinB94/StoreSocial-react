import React from 'react';
import { connect } from 'react-redux';

import { Grid, Row, Col, Loader } from '../atoms';
import { SignupCard } from '../organisms';

import { signup } from '../../store/reducers/auth';

const Signup = ({ loading, onSignup }) => (
  <div>
    <Grid>
      <Row center="xs">
        <Col md={4} lg={3} style={{ position: 'relative' }}>
          {loading && <Loader />}
          <SignupCard onSignup={onSignup} />
        </Col>
      </Row>
    </Grid>
  </div>
);

const mapStateToProps = state => ({
  loading: state.auth.signingUp
});

const mapDispatchToProps = dispatch => ({
  onSignup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
