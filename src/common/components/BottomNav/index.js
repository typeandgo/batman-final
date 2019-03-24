import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = props => {
  return (
    <div className="bottom-nav">
      <Link to='/' className="btn btn-sm btn-primary">Go Back</Link>
    </div>
  );
};

export default BottomNav;
