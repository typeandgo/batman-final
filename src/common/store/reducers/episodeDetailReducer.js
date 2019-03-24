import { FETCH_EPISODE_DETAIL, CLEAR_EPISODE_DETAIL } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {

    case FETCH_EPISODE_DETAIL:
      return action.payload;

    case CLEAR_EPISODE_DETAIL:
      return {};
      
    default:
      return state;
  }
};
