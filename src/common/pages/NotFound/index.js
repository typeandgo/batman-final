import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import BackButton from 'Common/components/BackButton';

const NotFound = ({ staticContext = {} }) => {
 
  staticContext.notFound = true;

  return (
    <div>
      
      <Helmet>
        <title>Batman Tv Shows - Page Not Found</title>
      </Helmet>

      <BackButton />

      <div className='card app-content'>
        <div className='card-body text-center'>
          <p>Page not found!</p>
        </div>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  staticContext: PropTypes.object
};

export default NotFound;
