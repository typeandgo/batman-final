import { FETCH_EPISODE, CLEAR_EPISODE } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EPISODE:
      return action.payload;
    case CLEAR_EPISODE:
      return {};
    default:
      return state;
  }
};
