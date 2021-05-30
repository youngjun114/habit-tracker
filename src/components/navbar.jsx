import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <i className='fab fa-stack-exchange navbar-logo'></i>
        <span>Habit Tracker</span>
        <span className='navbar-count'>{this.props.totalCount}</span>
      </div>
    );
  }
}
