import { createAction, handleActions } from 'redux-actions';

const actions = {
  RESET: 'TIMER/RESET',
  TICK: 'TIMER/TICK',
};

export const reset = createAction(actions.RESET);
export const tick = createAction(actions.TICK);

const initialState = {
  seconds: 0,
};

export default handleActions({
  [actions.RESET]: state => ({ ...state, seconds: 0 }),
  [actions.TICK]: state => ({ ...state, seconds: state.seconds + 1 }),
}, initialState);
