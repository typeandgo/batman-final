import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from '../Header';

const App = ({ route }) => {
  return (
    <div className="container app-container">

      <Header />

      <div className='jumbotron app-body'>

        { renderRoutes(route.routes) }
        
      </div>
    </div>
  );
};

export default App;

App.propTypes = {
  route: PropTypes.object.isRequired
};
