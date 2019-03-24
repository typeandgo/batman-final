import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark app-header'>

      <Link className='navbar-brand' to='/'><img src='/public/batman.svg' className='brand-logo' /> Batman Tv Shows</Link>

      <div className='navbar-nav'>
        <Link className='nav-item nav-link' to='/'>Home</Link>
        <Link className='nav-item nav-link' to='/about'>About</Link>
      </div>
    </nav>
  );
};

export default Header;
