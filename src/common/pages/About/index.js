import React from 'react';
import Helmet from 'react-helmet';

const About = props => {
  return (
    <div>
      
      <Helmet>
        <title>Batman Tv Shows - About Page</title>
      </Helmet>

      <div className='card app-content'>
        <div className='card-body text-center'>
          <p>This application shows Batman tv series by seasons.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
