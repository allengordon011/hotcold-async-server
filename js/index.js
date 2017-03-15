require('babel-polyfill');
import * as actions from './actions/index'
import store from './store'
import Form from './components/form'
import ReactDOM from 'react-dom'
import React from 'react'

import GameContainer from './components/gamecontainer'
// subscribe is a method that listens for changes on the store
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

var hardCodedHTML =
<div>
	<h1>Hello, Guess Number and If Wrong Be Laughed At</h1>
  <GameContainer />
</div>

ReactDOM.render(
  hardCodedHTML,
  document.getElementById('app')
);

store.dispatch(actions.newGame())
store.dispatch(actions.addGuess(10))
store.dispatch(actions.addGuess(43))
store.dispatch(actions.addGuess(81))
store.dispatch(actions.newGame())



unsubscribe();
