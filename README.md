## State Change Detection POC

This is a simple app which implements the core functionality needed to intercept state changes, diff the changes and take other dispatchable actions based on these changes

In order to illustrate the example, I created a simple app which will ask you to place a bet, time your response and annoyingly raise your bet by double every time. 

## Key Files

App.js: In this file we set an interval to dispatch the tick event every second
timer.js: This file is a reducer which is responsible for keeping the action time. It also contains the actions for ticking and resetting the timer
bettor.js: This file is a reducer which contains the bet, and the action to place a bet.
raiser.js: This file is a reducer which contains the raise amount, and the action to respond to a bet by doubling it. 
listenForBet.js: This file contains a single function which is called in response to all redux actions. It then determines if actions need to be taken based on the diff of the state.

## Key Concepts

Notice that a tick of the timer does not trigger the actions in listenForBet. Only a change of the bet can trigger that action.
Notice that the bet and the raise are contained in separate reducers and do not know about one another, yet the value from one affects the other through the diff.

## Libraries in use

[redux-on-state-change](https://npmjs.com/package/redux-on-state-change)

This is a redux middleware which calls our custom function any time the state is altered and passes in nextState, prevState, the action and the dispatch function.

[deep-object-diff](https://www.npmjs.com/package/deep-object-diff)

This library takes the nextState and prevState and provides a diff object. We use this diff object to decide what actions to take

## Running it

Clone this bad boy, `yarn install` and `yarn start`
