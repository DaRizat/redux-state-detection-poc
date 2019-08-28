import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bet } from 'bettor';

const Half = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  border: 1px solid gray;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: blue;
  color: white;
  font-size: 20px;
  border-radius: 3px;
`;

const PlaceBet = ({ betAction, seconds }) => {
  const [betAmount, setBetAmount] = useState(0);

  return (
    <Half>
      <h2>Place a Bet</h2>
      <Input type="number" onChange={(e) => setBetAmount(e.target.value)} />
      <Button type="submit" onClick={() => betAction(betAmount)}>BET</Button>
      <h3>Time to act:</h3>
      <p>{`${ seconds } seconds`}</p>
    </Half>
  );
}; 

const mdtp = {
  betAction: bet,
};

const mstp = state => ({ seconds: state.timer.seconds });

export default connect(mstp, mdtp)(PlaceBet);
