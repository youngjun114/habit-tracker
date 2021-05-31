import React, { PureComponent } from 'react';

export default class Navbar extends PureComponent {
  render() {
    console.log('navbar');
    return (
      <div className='navbar'>
        <i className='fab fa-stack-exchange navbar-logo'></i>
        <span>Habit Tracker</span>
        <span className='navbar-count'>{this.props.totalCount}</span>
      </div>
    );
  }
}
