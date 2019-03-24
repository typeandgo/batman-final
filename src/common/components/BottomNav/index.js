import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BottomNav extends Component {
  render () {
    return (
      <div className="bottom-nav">
        <Link to='/' className="btn btn-sm btn-primary btn-go-back">Go Back</Link>
      </div>
    );
  }
}
