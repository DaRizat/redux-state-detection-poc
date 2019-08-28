import { createAction, handleActions } from 'redux-actions';

const actions = {
  RAISE: 'RAISER/RAISE',
};

export const raise = createAction(actions.RAISE, bet => bet);

const initialState = {
  raise: null,
};

export default handleActions({
  [actions.RAISE]: (state, { payload }) => ({ ...state, raise: payload * 2, })
}, initialState);
