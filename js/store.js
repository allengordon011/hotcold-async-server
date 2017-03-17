import { createStore, applyMiddleware } from 'redux';
import { mainReducer } from './reducers/index';
import thunk from 'redux-thunk';

import * as reducers from './reducers/index';

export default createStore(mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
