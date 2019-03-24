import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { fetchEpisodeDetail, clearEpisodeDetail } from 'Common/store/actions';
import BackButton from 'Common/components/BackButton';

class Episode extends Component {
  
  componentDidMount () {
    const episodeId = this.props.match.params.id;

    this.props.fetchEpisodeDetail(episodeId);
  }

  componentWillUnmount () {
    this.props.clearEpisodeDetail();
  }

  render () {

    const { episode } = this.props;
    let episodeTemplate;

    if (Object.keys(episode).length === 0 && episode.constructor === Object) {
      
      episodeTemplate = (
        <div className='card-body'>
          <p>Episode loading...</p>
        </div>
      );

    } else if (episode.status === 404) {
      
      episodeTemplate = (
        <div className='card-body'>
          <p>Episode not found!</p>
        </div>
      );

    } else {
      
      const episodeImage = episode.image && episode.image.medium
        ? (<img src={ episode.image.medium } className='card-img-top' alt={episode.name} />)
        : (<img src='/public/empty-image.png' className='card-img-top' alt={episode.name} />);

      episodeTemplate = (
        <div>
          { episodeImage }
          <div className='card-body'>
            <h3>{ episode.name }</h3>
            <p>
              Seison: { episode.season } <br />
              Serie: { episode.number } <br />
              Air date: { episode.airdate } <br />
              Air time: { episode.airtime } <br />
              Duration: { episode.runtime }
            </p>
            <p className='card-text'>{ episode.summary.replace('<p>', '').replace('</p>', '') }</p>
          </div>
        </div>
      );
    }

    return (
      <Fragment>

        <Helmet>
          <title>Batman Tv Shows - Episode Detail</title>
        </Helmet>

        <BackButton />

        <div className='card app-content'>

          { episodeTemplate }

        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  episode: state.episode,
});

export default connect(mapStateToProps, { fetchEpisodeDetail, clearEpisodeDetail })(Episode);

export const loadDataEpisode = ({ dispatch }, urlParams) => {
  const episodeId = urlParams.id;

  return dispatch(fetchEpisodeDetail(episodeId));
};

Episode.propTypes = {
  episode: PropTypes.object,
  fetchEpisodeDetail: PropTypes.func,
  clearEpisodeDetail: PropTypes.func,
  match: PropTypes.object.isRequired
};
