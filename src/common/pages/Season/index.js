import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { fetchEpisodeList, clearEpisodeList } from 'Common/store/actions';
import ListItem from 'Common/components/ListItem';
import BackButton from 'Common/components/BackButton';

class Season extends Component {
  
  componentDidMount () {
    const episodeId = this.props.match.params.id;

    this.props.fetchEpisodeList(episodeId);
  }

  componentWillUnmount () {
    this.props.clearEpisodeList();
  }

  render () {
    const { episodes } = this.props;
    let listTemplate = null;

    if (Array.isArray(episodes) && episodes.length === 0) {
      listTemplate = (
        <li>Episodes loading...</li>
      );
    } else if (episodes.status === 404) {
      listTemplate = (
        <li>Episodes not found!</li>
      );
    } else {
      listTemplate = episodes.map(tvShow => (
        <ListItem key={ tvShow.id } data={ tvShow } linkPrefix='episode' />
      ));
    }

    return (
      <Fragment>
        <Helmet>
          <title>Batman Tv Shows - Home Page</title>
        </Helmet>

        <BackButton />

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
  episodes: state.episodes,
});

export default connect(mapStateToProps, { fetchEpisodeList, clearEpisodeList })(Season);

export const loadDataSeason = ({ dispatch }, urlParams) => {
  const episodeId = urlParams.id;

  return dispatch(fetchEpisodeList(episodeId));
};

Season.propTypes = {
  episodes: PropTypes.array,
  fetchEpisodeList: PropTypes.func,
  clearEpisodeList: PropTypes.func,
  match: PropTypes.object.isRequired
};
