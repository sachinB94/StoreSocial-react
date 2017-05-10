import React from 'react';
import styled from 'styled-components';
import CircularProgress from 'material-ui/CircularProgress';

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <Container>
    <CircularProgress />
  </Container>
);

export default Loader;
