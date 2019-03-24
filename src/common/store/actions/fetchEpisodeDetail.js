import axios from 'axios';

export const FETCH_EPISODE_DETAIL = 'Fetch_Episode_Detail';

export const fetchEpisodeDetail = (episodeId) => async dispatch => {
  try {

    const res = await axios.get(`http://api.tvmaze.com/episodes/${episodeId}`);

    dispatch({
      type: FETCH_EPISODE_DETAIL,
      payload: res.data
    });
  
  } catch (e) {

    const errorResponse = {
      status: 404,
      code: 0,
      message: 'Not found'
    };

    dispatch({
      type: FETCH_EPISODE_DETAIL,
      payload: errorResponse
    });
  }
};
