import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default createStore(
  reducers,
  (typeof window !== 'undefined' && window.INITIAL_STATE ? window.INITIAL_STATE : {}),
  applyMiddleware(thunk)
);
