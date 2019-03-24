import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render () {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'><img src='/public/batman.svg' className='brand-logo' /> Batman Tv Shows</Link>
      </nav>
    );
  }
}
