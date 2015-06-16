import React, { Component } from 'react';

export default React.createClass({
  getInitialState(){
    return {
      count: 0
    };
  },

  render() {
    return (
      <div>
        <p>Clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Do stuff</button>
      </div>
    );
  },

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
});
