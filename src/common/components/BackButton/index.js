import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class BackButton extends Component {
  render () {
    return (
      <div className="back-nav">
        <button className="btn btn-sm btn-primary" onClick={() => this.props.history.goBack() }>Go Back</button>
      </div>
    );
  }
}

export default withRouter(BackButton);

BackButton.propTypes = {
  history: PropTypes.object
};

