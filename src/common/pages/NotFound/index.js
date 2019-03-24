import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import BottomNav from '../../components/BottomNav';

const NotFound = ({ staticContext = {} }) => {
 
  staticContext.notFound = true;

  return (
    <div>
      
      <Helmet>
        <title>Batman Tv Shows - Page Not Found</title>
      </Helmet>

      <div className='card app-content'>
        <div className='card-body text-center'>
          <p>Page not found!</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

NotFound.propTypes = {
  staticContext: PropTypes.object
};

export default NotFound;
