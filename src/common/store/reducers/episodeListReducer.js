import { FETCH_EPISODE_LIST, CLEAR_EPISODE_LIST } from '../actions';

export default (state = [], action) => {
  switch (action.type) {

    case FETCH_EPISODE_LIST:
      return action.payload;

    case CLEAR_EPISODE_LIST:
      return [];
      
    default:
      return state;
  }
};
