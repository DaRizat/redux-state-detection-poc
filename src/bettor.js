import { createAction, handleActions } from 'redux-actions';

const actions = {
  BET: 'BETTOR/BET',
};

export const bet = createAction(actions.BET, amount => amount);

const initialState = {
  bet: 0,
};

export default handleActions({
  [actions.BET]: (state, { payload }) => ({ ...state, bet: payload })
}, initialState);
