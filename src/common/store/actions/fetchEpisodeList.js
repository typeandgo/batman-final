import axios from 'axios';

export const FETCH_EPISODE_LIST = 'Fetch_Episodes_List';

export const fetchEpisodeList = (episodeId) => async dispatch => {
  try {
    const res = await axios.get(`http://api.tvmaze.com/shows/${ episodeId }/episodes`);

    dispatch({
      type: FETCH_EPISODE_LIST,
      payload: res.data
    });
  
  } catch (e) {

    const errorResponse = {
      status: 404,
      code: 0,
      message: 'Not found'
    };

    dispatch({
      type: FETCH_EPISODE_LIST,
      payload: errorResponse
    });
  }
};
