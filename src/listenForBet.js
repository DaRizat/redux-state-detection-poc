import { diff } from 'deep-object-diff';
import { raise } from 'raiser';
import { reset } from 'timer';

export default (prevState, nextState, action, dispatch) => {
  const d = diff(prevState, nextState);
  if (d && d.bettor && d.bettor.bet) {
    dispatch(raise(d.bettor.bet));
    dispatch(reset());
  }
};
