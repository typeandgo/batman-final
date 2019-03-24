import { FETCH_SEASON_LIST } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    
    case FETCH_SEASON_LIST:
      return action.payload;

    default:
      return state;
  }
};
