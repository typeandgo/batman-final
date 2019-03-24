import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { fetchTvShows } from '../../store/actions';
import ListItem from '../../components/ListItem';

class Home extends Component {
  
  componentDidMount () {
    this.props.fetchTvShows();
  }

  render () {
    const { tvShows } = this.props;
    let listTemplate;

    if (Array.isArray(tvShows) && tvShows.length === 0) {
      listTemplate = (
        <li>Tv shows loading...</li>
      );
    } else if (tvShows.status === 404) {
      listTemplate = (
        <li>Tv shows not found!</li>
      );
    } else {
      listTemplate = tvShows.map(tvShow => (
        <ListItem key={ tvShow.id } data={ tvShow } />
      ));
    }

    return (
      <Fragment>
        <Helmet>
          <title>Batman Tv Shows - Home Page</title>
        </Helmet>

        <div className='card app-content'>
          <ul className='list-group list-group-flush mx-auto'>

            { listTemplate }
            
          </ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tvShows: state.tvShows,
});

export default connect(mapStateToProps, { fetchTvShows })(Home);

export const loadDataHome = ({ dispatch }, urlParams) => {
  return Promise.all([
    dispatch(fetchTvShows()),
  ]);
};

Home.propTypes = {
  tvShows: PropTypes.array,
  fetchTvShows: PropTypes.func
};
