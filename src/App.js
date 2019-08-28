import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PlaceBet from 'PlaceBet';
import SeeRaise from 'SeeRaise';
import { tick } from 'timer';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

function App({ tickAction }) {
  setInterval(tickAction, 1000);
  return (
    <Container>
      <PlaceBet />
      <SeeRaise />
    </Container>
  );
}

const mdtp = {
  tickAction: tick,
};

export default connect(null, mdtp)(App);
