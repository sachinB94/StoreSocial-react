import React from 'react';

import { Row, Col, Logo } from '../atoms';

const Description = ({ loading, onSignin }) => (
  <Row center="xs" middle="xs" style={{ height: '100%' }}>
    <Col>
      <Logo.WithText style={{ width: '60%', paddingBottom: 20 }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>Save your contacts</span>
        <span>and</span>
        <span>access them on the go</span>
      </div>
    </Col>
  </Row>
);

export default Description;
