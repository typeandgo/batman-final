import axios from 'axios';

export const FETCH_EPISODE = 'Fetch_Episode';

export const fetchEpisode = (episodeId) => async dispatch => {
  try {

    const res = await axios.get(`http://api.tvmaze.com/episodes/${episodeId}`);

    dispatch({
      type: FETCH_EPISODE,
      payload: res.data
    });
  
  } catch (e) {

    const errorResponse = {
      status: 404,
      code: 0,
      message: 'Not found'
    };

    dispatch({
      type: FETCH_EPISODE,
      payload: errorResponse
    });
  }
};
