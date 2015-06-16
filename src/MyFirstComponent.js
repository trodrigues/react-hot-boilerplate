import React, { Component } from 'react';

export default class MyFirstComponent extends Component {
  render() {
    return (
      <button onClick={this.handleClick}>Do stuff</button>
    );
  }

  handleClick() {
    alert('Stuff is done!');
  }
}
