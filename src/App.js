import React, { Component } from 'react';
import MyFirstComponent from './MyFirstComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <MyFirstComponent />
      </div>
    );
  }
}
