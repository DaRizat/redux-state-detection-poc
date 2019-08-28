import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Half = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 20px;
`;

const SeeRaise = ({ bet, raise }) => (
  <Half>
    { raise && 
      <>
        <h2>{`I'll see your ${ bet } and RAISE you`}</h2>
        <h1>{raise}</h1>
      </>
    }
  </Half>
);

const mstp = state => ({
  bet: state.bettor.bet,
  raise: state.raiser.raise,
});

export default connect(mstp)(SeeRaise);
