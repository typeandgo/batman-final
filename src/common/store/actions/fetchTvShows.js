import axios from 'axios';

export const FETCH_TV_SHOWS = 'Fetch_Tv_Shows';

export const fetchTvShows = () => async dispatch => {
  try {

    const res = await axios.get('http://api.tvmaze.com/shows/975/episodes');

    dispatch({
      type: FETCH_TV_SHOWS,
      payload: res.data
    });
  
  } catch (e) {

    const errorResponse = {
      status: 404,
      code: 0,
      message: 'Not found'
    };

    dispatch({
      type: FETCH_TV_SHOWS,
      payload: errorResponse
    });
  }
};
