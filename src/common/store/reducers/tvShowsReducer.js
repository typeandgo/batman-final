import { FETCH_TV_SHOWS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TV_SHOWS:
      return action.payload;
    default:
      return state;
  }
};
