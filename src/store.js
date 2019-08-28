import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import onStateChange from 'redux-on-state-change';

import bettor from 'bettor';
import raiser from 'raiser';
import timer from 'timer';
import listenForBet from 'listenForBet';

export const storeFactory = (initialState) => {
  const rootReducer = combineReducers({
    bettor,
    raiser,
    timer,
  });

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(logger, onStateChange(listenForBet))
    ),
  );

  return store;
};
