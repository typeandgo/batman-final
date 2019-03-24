import { combineReducers } from 'redux';
import tvShowsReducer from './tvShowsReducer';
import episodeReducer from './episodeReducer';

export default combineReducers({
  tvShows: tvShowsReducer,
  episode: episodeReducer
});
