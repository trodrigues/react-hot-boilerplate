import React, { Component } from 'react';

export default class MyFirstComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Clicked {this.state.count} times</p>
        <button onClick={this.handleClick.bind(this)}>Do stuff</button>
      </div>
    );
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
};
