import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { fetchSeasonList } from 'Common/store/actions';
import ListItem from 'Common/components/ListItem';

class Home extends Component {
  
  componentDidMount () {
    this.props.fetchSeasonList();
  }

  render () {
    const { seasons } = this.props;
    let listTemplate;

    if (Array.isArray(seasons) && seasons.length === 0) {
      listTemplate = (
        <li>Seasons loading...</li>
      );
    } else if (seasons.status === 404) {
      listTemplate = (
        <li>Seasons not found!</li>
      );
    } else {
      listTemplate = seasons.map(season => (
        <ListItem key={ season.show.id } data={ season.show } linkPrefix='season' />
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
  seasons: state.seasons,
});

export default connect(mapStateToProps, { fetchSeasonList })(Home);

export const loadDataHome = ({ dispatch }, urlParams) => {
  return Promise.all([
    dispatch(fetchSeasonList()),
  ]);
};

Home.propTypes = {
  seasons: PropTypes.array,
  fetchSeasonList: PropTypes.func
};
