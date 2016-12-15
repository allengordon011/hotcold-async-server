import { createStore } from 'redux';
import { mainReducer } from './reducers/index';
import thunk from 'redux-thunk';

export default createStore(mainReducer, applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
