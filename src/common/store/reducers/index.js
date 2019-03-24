import { combineReducers } from 'redux';
import seasonListReducer from './seasonListReducer';
import episodeListReducer from './episodeListReducer';
import episodeDetailReducer from './episodeDetailReducer';

export default combineReducers({
  seasons: seasonListReducer,
  episodes: episodeListReducer,
  episode: episodeDetailReducer
});
