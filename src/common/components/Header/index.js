import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <nav className='navbar navbar-dark bg-dark app-header'>
      <Link className='navbar-brand' to='/'><img src='/public/batman.svg' className='brand-logo' /> Batman Tv Shows</Link>
    </nav>
  );
};

export default Header;
