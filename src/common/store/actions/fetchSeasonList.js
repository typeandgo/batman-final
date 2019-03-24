import axios from 'axios';

export const FETCH_SEASON_LIST = 'Fetch_Season_List';

export const fetchSeasonList = () => async dispatch => {
  try {

    const res = await axios.get('http://api.tvmaze.com/search/shows?q=batman');

    dispatch({
      type: FETCH_SEASON_LIST,
      payload: res.data
    });
  
  } catch (e) {

    const errorResponse = {
      status: 404,
      code: 0,
      message: 'Not found'
    };

    dispatch({
      type: FETCH_SEASON_LIST,
      payload: errorResponse
    });
  }
};
